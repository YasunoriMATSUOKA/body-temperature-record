import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(Home, { localVue, vuetify });
  });

  test("h2 title shoule be ホーム", () => {
    const h2Title = "ホーム";
    expect(wrapper.find("h2").text()).toBe(h2Title);
  });

  test("p message should be This is a home page", () => {
    const msg = "This is a home page";
    expect(wrapper.find("p").text()).toBe(msg);
  });
});
