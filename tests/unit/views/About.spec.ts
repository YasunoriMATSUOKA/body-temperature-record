import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(About, { localVue, vuetify });
  });

  test("h2 title should be このアプリについて", () => {
    const h2Title = "このアプリについて";
    expect(wrapper.find("h2").text()).toBe(h2Title);
  });

  test("p message should be This is an about page", () => {
    const msg = "This is an about page";
    expect(wrapper.text()).toMatch(msg);
  });
});
