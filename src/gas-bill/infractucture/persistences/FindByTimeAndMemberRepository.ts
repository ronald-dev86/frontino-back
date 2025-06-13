import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { FindByTimeAndMemberRepository } from "../../domain/repositories/FindByTimeAndMemberRepository";

export class FindByTimeAndMemberColletionFirebase extends CollectionFirebase implements FindByTimeAndMemberRepository {
    constructor() {
        super("gas-bills");
    }
    async handle(time: Date, idMember: string): Promise<any>{
        const snapshot = await this.collection.where('time', '==', time).where('idMember', '==', idMember).get();
        const gasBills = snapshot.docs.map((doc: any) => {
            const gasBill =  new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...gasBill.Item };
        });
        return gasBills;
    }
}