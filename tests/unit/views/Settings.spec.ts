import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Settings from "@/views/Settings.vue";

describe("Setting.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(Settings, { localVue, vuetify });
  });

  test("h2 title should be 設定", () => {
    expect(wrapper.find("h2").text()).toBe("設定");
  });

  test("p message should be This is an settings page", () => {
    expect(wrapper.find("p").text()).toBe("This is a settings page");
  });
});
