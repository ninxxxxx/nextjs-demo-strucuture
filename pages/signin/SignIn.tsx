import { useState } from "react"
import styled from 'styled-components'
import { signin } from './__api__'
import tw from 'twin.macro'
// import registerImg from '/register.jpg'


export default function SignIn() {

    return (
        <Layout>
            <Container>
                <Item>
                    <Header>
                        <Title>Sign in to your<br />Marketer Account</Title>
                    </Header>
                    <Form>
                        <Input type="text" placeholder="E-Mail" />
                        <Input type="text" placeholder="Password" />
                        <Button>signin</Button>
                    </Form>
                    <div>
                        <LittieLink>Forget your password</LittieLink>
                    </div>
                </Item>
                <Item>
                    <div className="absolute z-10">
                        <SecondTitle>not a marketer yet ?</SecondTitle>
                    </div>
                    <BackDropImg src="/register.jpg" />
                </Item>
            </Container>
        </Layout>
    )
}

const Layout = styled.div`
    ${tw`min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8`}
`

const Container = styled.div`
    ${tw`max-w-md w-full lg:max-w-4xl flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse`}
`

const Header = styled.div``

const Title = styled.h2`
    ${tw`text-center text-2xl font-extrabold text-gray-900`}
`
const Form = styled.form`
    ${tw`max-w-md w-full`}
`

const Input = styled.input`
    ${tw`w-full mt-2 rounded px-2 py-4`}
`

const Button = styled.button`
    ${tw`appearance-none w-full px-2 py-4 mt-2 bg-blue-500 rounded text-white hover:bg-blue-600`}
`

const LittieLink = styled.a`
    ${tw`text-sm text-center w-full text-gray-500 mt-2`}
    display:inline-block;
`

const Item = styled.div`
    ${tw`w-full lg:w-1/2 px-1`}
`

const SecondTitle = styled.p`
    ${tw`text-center text-xl text-white mt-10 lg:mt-0`}
`

const BackDropImg = styled.img`
    ${tw`rounded z-0`}
    background-image: url(${({ src }) => src});
    filter: brightness(0.5);
    background-size: cover;
`
