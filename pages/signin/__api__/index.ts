export async function signin(data: { email: string, password: string }): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
}