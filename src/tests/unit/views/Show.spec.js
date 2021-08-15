import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Show from '@/views/Show.vue'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fetchPost } from "@/api/posts"
import { postsData } from "../../helpers/data"

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

jest.mock('@/api/posts')

describe('Show view', () => {
  let wrapper = null

  beforeEach(() => {
    fetchPost.mockResolvedValue(postsData[0])
    wrapper = shallowMount(Show, {
      localVue,
      router,
    })
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should show information about post', async() => {    
    expect(wrapper.find('.title').text()).toMatch(postsData[0].title)
    expect(wrapper.findAll('h2').at(1).text()).toMatch(postsData[0].extract)
  })

  it('should show buttons: volver, editar, eliminar', () => {
    expect(wrapper.findAll('b-button-stub').at(0).text()).toMatch('Volver')
    expect(wrapper.findAll('b-button-stub').at(1).text()).toMatch('Editar')
    expect(wrapper.findAll('b-button-stub').at(2).text()).toMatch('Eliminar')
  })

  it('should show component <Breadcrumbs />', () => {
    const comp = wrapper.findComponent(Breadcrumbs)
    expect(comp.exists()).toBe(true)
  })
})

describe('Event view component Show', () => {
  let wrapper = null

  beforeEach(() => {
    fetchPost.mockResolvedValue(postsData[0])
    wrapper = shallowMount(Show, {
      localVue,
      router
    })
  })

  it('should call alertConfirm() when click on button Eliminar', () => {
    wrapper.vm.alertConfirm = jest.fn()
    const buttonDelete = wrapper.findAll('b-button-stub').at(2)
    buttonDelete.vm.$listeners.click()
    expect(wrapper.vm.alertConfirm).toHaveBeenCalled()
  })
})

