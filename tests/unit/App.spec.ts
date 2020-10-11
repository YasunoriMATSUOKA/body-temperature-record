import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();

  let vuetify;
  /*
  2020/10/11
  本来wrapperはコメントアウトしてある箇所のように型定義したいが、
  その場合methodsが型に含まれないような状態に見え、
  methodsを適切に呼び出してテストする方法が分からなかった。
  そのため暫定的にanyで対応。
  */
  // let wrapper: Wrapper<Vue | null>;
  let wrapper: any;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(App, {
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"]
    });
  });

  test("At initial status, showNavigationDrawer should be false", () => {
    expect(wrapper.vm?.$data.showNavigationDrawer).toBe(false);
  });

  test("After click menu button, showNavigationDrawer should be true", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.vm?.$data.showNavigationDrawer).toBe(true);
  });

  test("After toggleNavigationDrawer is called, showNavigationDrawer should be true.", () => {
    // wrapperをanyで暫定的に対応したのはこの箇所のため。
    wrapper.vm.toggleNavigationDrawer();
    expect(wrapper.vm?.$data.showNavigationDrawer).toBe(true);
  });

  test("After toggleNavigationDrawer is called 2 times, showNavigationDrawer should be false.", () => {
    // wrapperをanyで暫定的に対応したのはこの箇所のため。
    wrapper.vm.toggleNavigationDrawer();
    wrapper.vm.toggleNavigationDrawer();
    expect(wrapper.vm?.$data.showNavigationDrawer).toBe(false);
  });
});
