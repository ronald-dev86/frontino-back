import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { FindInIdsMembersRepository } from "../../domain/repositories/FindInIdsMembersRepository";

export class FindInIdsMembersColletionFirebase extends CollectionFirebase implements FindInIdsMembersRepository {
    constructor() {
        super("gas-bills");
    }
    async handle(idsMembers: string[]): Promise<any>{
        const snapshot = await this.collection.where('idMember', 'in', idsMembers).get();
        const gasBills = snapshot.docs.map((doc: any) => {
            const gasBill =  new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...gasBill.Item };
        });
        return gasBills;
        
    }
}