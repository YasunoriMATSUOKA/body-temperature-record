import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, mount, shallowMount, Wrapper } from "@vue/test-utils";
import AppHeader from "@/components/common/AppHeader.vue";

describe("AppHeader.vue", () => {
  const localVue = createLocalVue();

  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(AppHeader, { localVue, vuetify });
  });

  test("Menu icon should be show", () => {
    expect(wrapper.find("i").element.className).toMatch("mdi-menu");
  });

  test("When menu icon is clicked, toggleNavigationDrawer event should be emitted", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().toggleNavigationDrawer).toBeTruthy();
  });

  test("h1 title is 体温記録", () => {
    expect(wrapper.find("h1").text()).toBe("体温記録");
  });

  test("Logout icon should be show", () => {
    expect(wrapper.find("path").element.getAttribute("d")).toBe(
      "M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
    );
  });
});
