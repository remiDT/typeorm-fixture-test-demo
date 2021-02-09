import {Column, Entity, ManyToMany, OneToMany} from "typeorm";
import {Article} from "./Article";
import { v4 as uuidV4 } from 'uuid';

@Entity("tag", {schema: "public"})
export class Tag {

    @Column("uuid", {primary: true, name: "id"})
    id: string;

    @Column({ length: 255})
    name?: string;

    @ManyToMany(() => Article, (article) => article.tags)
    articles?: Article[];

    constructor() {
        this.id = uuidV4();
    }
}
