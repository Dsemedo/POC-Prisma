export type UserEntity = {
    id: number,
    name: string
}

export type User = Omit<UserEntity, "id">;

export type NewUser = Partial<UserEntity>