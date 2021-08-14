import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { fetchPosts } from "@/api/posts"
import { postsData } from "../helpers/data"
import PostCard from '@/components/PostCard'

jest.mock('@/api/posts')

describe('Calls API', () => {
  beforeEach(() => {
    fetchPosts.mockResolvedValue(postsData)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should return posts', async() => {
    const result = await fetchPosts()
    expect(result).toBe(postsData)
    expect(fetchPosts).toHaveBeenCalledTimes(1) 
  })
})

describe('Home Component without data', () => {
  let wrapper = null

  beforeEach(() => {
    fetchPosts.mockResolvedValue([]);
    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should show message: No hay publicaciones.', async() => {
    expect(wrapper.find('.box').exists()).toBe(true)
    expect(wrapper.find('.box').text()).toEqual('No hay publicaciones.');
  })

  it('should show 0 posts', async() => {
    expect(wrapper.vm.posts.length).toEqual(0)
  })

  it('should not show component <PostCard />', () => {
    const comp = wrapper.findComponent(PostCard)
    expect(comp.exists()).toBe(false)
  })
})


describe('Home Component with data', () => {
  let wrapper = null

  beforeEach(() => {
    fetchPosts.mockResolvedValue(postsData);
    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should show posts', async() => {
    expect(wrapper.vm.posts.length).toEqual(postsData.length)
  })

  it('should show component <PostCard />', () => {
    const comp = wrapper.findComponent(PostCard)
    expect(comp.exists()).toBe(true)
    // expect(comp.attributes('post')).toBe('[object Object]')
    const comps = wrapper.findAllComponents(PostCard)
    expect(comps).toHaveLength(postsData.length)
  })
})
