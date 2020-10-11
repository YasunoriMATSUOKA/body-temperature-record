import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Help from "@/views/Help.vue";

describe("Help.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper: Wrapper<Vue | null>;

  beforeAll(() => {});

  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(Help, { localVue, vuetify });
  });

  it("h2 title should be ヘルプ", () => {
    const h2TitleText = "ヘルプ";
    expect(wrapper.find("h2").text()).toBe(h2TitleText);
  });

  it("p message should be This is an help page", () => {
    const msg = "This is a help page";
    expect(wrapper.find("p").text()).toBe(msg);
  });
});
