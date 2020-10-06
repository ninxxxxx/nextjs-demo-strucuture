import { render, screen } from "@testing-library/react";
import MyApp from '../../pages/index'

describe("App", () => {
    it("renders without crashing", () => {
        const { getAllByRole } = render(<MyApp />);
        getAllByRole('heading', { name: 'Welcome to Next.js!' })
    });
});