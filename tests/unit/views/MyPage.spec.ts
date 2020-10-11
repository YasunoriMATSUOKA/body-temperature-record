import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import MyPage from "@/views/MyPage.vue";

describe("MyPage.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(MyPage, { localVue, vuetify });
  });

  test("h2 title should be マイページ", () => {
    const h2Title = "マイページ";
    expect(wrapper.find("h2").text()).toBe(h2Title);
  });

  test("p message should be This is a myPage page", () => {
    const msg = "This is a myPage page";
    expect(wrapper.find("p").text()).toBe(msg);
  });
});
