export async function signin(data: { email: string, password: string }): Promise<{ success: boolean }> {
    console.log('mock data was caught');
    return Promise.resolve({ success: true })
}