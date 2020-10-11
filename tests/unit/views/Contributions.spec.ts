import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Contributions from "@/views/Contributions.vue";

describe("Contributions.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(Contributions, { localVue, vuetify });
  });

  test("h2 title should be 寄付", () => {
    const h2Title = "寄付";
    expect(wrapper.find("h2").text()).toBe(h2Title);
  });

  test("p message should be This is an contributions page", () => {
    const msg = "This is a contributions page";
    expect(wrapper.find("p").text()).toBe(msg);
  });
});
