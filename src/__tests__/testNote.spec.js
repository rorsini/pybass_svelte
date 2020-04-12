import { render } from "@testing-library/svelte";
import Note from "../components/Note.svelte";

describe("index component", () => {
  test("should render a <Note> correctly", () => {

    const props = {
        label: "C#"
    };

    const { container } = render(Note, props);

    expect(container).toContainHTML("<rect");
  });
});

