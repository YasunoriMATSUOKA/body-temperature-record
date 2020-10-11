import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import AppNavigationDrawer from "@/components/common/AppNavigationDrawer.vue";

describe("AppNavigationDrawer.vue", () => {
  const localVue = createLocalVue();

  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(AppNavigationDrawer, {
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"]
    });
  });

  test("Home menu text should be ホーム", () => {
    expect(wrapper.text()).toMatch("ホーム");
  });

  test("MyPage menu text should be マイページ", () => {
    expect(wrapper.text()).toMatch("マイページ");
  });

  test("Settings menu text should be 設定", () => {
    expect(wrapper.text()).toMatch("設定");
  });

  test("About menu text should be このアプリについて", () => {
    expect(wrapper.text()).toMatch("このアプリについて");
  });

  test("Help menu text should be ヘルプ", () => {
    expect(wrapper.text()).toMatch("ヘルプ");
  });

  test("Contributions menu text should be 寄付", () => {
    expect(wrapper.text()).toMatch("寄付");
  });
});
