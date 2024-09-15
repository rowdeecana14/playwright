import { test, expect } from "@playwright/test";
const TODOS = [
    'take a bath',
    'eat breakfast',
    'brush your teeth',
    'go to work',
    'go to sleep'
];

test.beforeEach(async({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Add todo', () => {
    test('should allow me to add todos', async ({ page }) => {
        let add_elem = page.getByPlaceholder('What needs to be done?');

        // Loop through each todo in TODOS array and add them
        for (let i = 0; i < TODOS.length; i++) {
            await add_elem.fill(TODOS[i]);
            await add_elem.press('Enter');

            // Assert that the todos added so far are in the list
            await expect(page.getByTestId('todo-title')).toContainText(TODOS.slice(0, i + 1));
        }
    });
});
