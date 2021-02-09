import {Column, Entity, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import {User} from "./User";
import {Tag} from "./Tag";
import { v4 as uuidV4 } from 'uuid';

@Entity("article", {schema: "public"})
export class Article {
    @Column("uuid", {primary: true, name: "id"})
    id: string;

    @Column({length: 180})
    title?: string;

    @Column({length: 1000})
    content?: string;

    @ManyToOne(() => User, (user) => user.articles, {onDelete: "SET NULL"})
    user?: User;

    @ManyToMany(() => Tag, (tag) => tag.articles)
    @JoinTable({
        name: "article_tag",
        joinColumns: [{name: "article_id", referencedColumnName: "id"}],
        inverseJoinColumns: [{name: "tag_id", referencedColumnName: "id"}],
    })
    tags?: Tag[];

    constructor() {
        this.id = uuidV4();
    }
}
