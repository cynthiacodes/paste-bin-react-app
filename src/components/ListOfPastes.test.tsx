import { render, screen } from "../testUtils/testUtils";
import { ListOfPastes } from "./ListOfPastes";

//An example of using react-testing-library
describe("ListOfPastes", async () => {
    test.skip("Should have text Hello from My Component on it", () => {
        render(<ListOfPastes />);
        const elem = screen.getByText("Hello from My Component");
        expect(elem).toBeInTheDocument();
    });
});
