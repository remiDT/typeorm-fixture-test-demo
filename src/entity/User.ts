import {Column, Entity, OneToMany} from "typeorm";
import {Article} from "./Article";
import { v4 as uuidV4 } from 'uuid';

@Entity("user", {schema: "public"})
export class User {
    @Column("uuid", {primary: true, name: "id"})
    id: string;

    @Column({ length: 255})
    firstName?: string;

    @Column({ length: 255})
    lastName?: string;

    @OneToMany(() => Article, (article) => article.user)
    articles?: Article[];


    constructor() {
        this.id = uuidV4();
    }
}
