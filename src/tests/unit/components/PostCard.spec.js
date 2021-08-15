import { mount, shallowMount } from '@vue/test-utils'
import { postsData } from "../../helpers/data"
import PostCard from '@/components/PostCard'

jest.mock('@/api/posts')

describe('PostCard component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(PostCard, {
      propsData: { post: postsData[0] }
    })
  })

  it('should show information about post', () => {
    expect(wrapper.props().post).toEqual(postsData[0])
    expect(wrapper.findAll('p').at(0).text()).toMatch(postsData[0].title)
    expect(wrapper.findAll('p').at(1).text()).toMatch(postsData[0].extract)
  });

  it('should have props post', async() => {
    const postProp = wrapper.vm.$options.props.post
    expect(postProp.type).toBe(Object)
    expect(postProp.required).toBeTruthy()
  })
})

describe('Events PostCard Components', () => {
  let wrapper = null

  const $route = {
    name: "/1"
  }

  const $router = {
    push: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallowMount(PostCard, {
      propsData: { post: postsData[0] },
      mocks: {
        $route,
        $router,
      }
    })
  })

  it('should redirect /:id when click in PostCard', async() => {
    await wrapper.trigger('click')
    expect(wrapper.vm.$route.name).toBe(`/1`)
  })
})
