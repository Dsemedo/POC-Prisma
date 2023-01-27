export type UserEntity = {
    id: number,
    name: string
}

export type User = Omit<UserEntity, "id">;

export type NewUser = Partial<UserEntity>

export type SeatEntity = {
    id: number,
    isAvaliable: boolean,
    owner: string
}

export type Seat = Omit<UserEntity, "id">;

export type NewSeat = Partial<SeatEntity>
