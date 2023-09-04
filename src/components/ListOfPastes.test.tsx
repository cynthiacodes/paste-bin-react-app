import { limitText, formatDate } from "./ListOfPastes";

test("limitText returns a string,limited to the number of words that should be displayed based on the second argument", () => {
    expect(
        limitText(
            "const isEven = num => num % 2 === 0;\nconsole.log(isEven(4))",
            5
        )
    ).toEqual("const isEven = num =>...");
    expect(
        limitText(
            'const colors = ["red", "green", "blue"];\nfor (const color of colors) {\n console.log(color);\n}',
            2
        )
    ).toEqual("const colors...");
});

test("formatDate returns a shorter version of the date, with time removed", () => {
    expect(formatDate("2023-08-31 14:11:28.902516")).toEqual("2023-08-31");
});
