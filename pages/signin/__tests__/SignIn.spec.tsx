// import { render, screen } from '@testing-library/react'
// import SignIn from '../SignIn'
// import { AuthenData } from '../__types__/signin.interface';
// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom/extend-expect'
// import * as API from '../__api__'

// // jest.mock('../__api__')
// // signin = jest.fn().mockResolvedValue(Promise.resolve({ success: true }))
// // mockSignIn.

// const initPage = () => {
//     const { getByLabelText, getByRole, getByText } = render(<SignIn />);
//     const getInput = (name: string) => getByLabelText(name)
//     const getSubmit = () => getByRole('button', { name: /signin/i })
//     return {
//         getInput,
//         getSubmit,
//         getByText,
//     }
// }

// const ExpectedUser: AuthenData = {
//     email: 'ninxxxxxx@gmail.com',
//     password: '123456'
// }

// fdescribe('SignIn', () => {

//     beforeEach(() => {
//         jest.clearAllMocks()
//     })

//     it('should render without catch!', () => {
//         const { getInput, getSubmit } = initPage()
//         getInput('email')
//         getInput('password')
//         getSubmit()
//     });

//     it('should alert when submit with incomplete data ', async () => {
//         const { getSubmit, getByText } = initPage()
//         userEvent.click(getSubmit())
//         expect(screen.getByText(/please correct the data/i)).toBeInTheDocument()
//     })

//     it('should return success true when data is correct', async () => {
//         const { getInput, getSubmit } = initPage()
//         const { email: expectedEmail, password: expectedPassword } = ExpectedUser
//         jest.spyOn(API, 'signin').mockResolvedValueOnce({ success: true })

//         await userEvent.type(getInput('email'), expectedEmail)
//         await userEvent.type(getInput('password'), expectedPassword)
//         userEvent.click(getSubmit())

//         const alert = await screen.findByText(/success/i)
//         // cosnt 



//     })

//     it('should return fail when data is not correct', async () => {
//         const { getInput, getSubmit } = initPage()
//         const { email: expectedEmail, password: expectedPassword } = ExpectedUser
//         jest.spyOn(API, 'signin').mockResolvedValueOnce({ success: false })

//         await userEvent.type(getInput('email'), expectedEmail)
//         await userEvent.type(getInput('password'), expectedPassword)
//         userEvent.click(getSubmit())

//         const alert = await screen.findByText(/fail/i)
//     })

// });