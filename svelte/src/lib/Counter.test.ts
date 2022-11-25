import {fireEvent, render, RenderResult} from "@testing-library/svelte";
import Counter from "./Counter.svelte";

describe("Counter", () => {
    let result: RenderResult<Counter>;

    beforeEach(() => {
        result = render(Counter);
    })

    it("works", () => {
        expect(result).not.toBeUndefined();
    });
    it("increments count when the button is pushed", async () => {
        let button = await result.findByText("Increment");
        await fireEvent.click(button);

        let text = await result.findByTestId("counter-value");
        expect(text.textContent).toEqual("1");
    })
})