import {
    CreateParams,
    CreateResult,
    DataProvider,
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetListParams,
    GetListResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord,
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
    fetchUtils
} from "react-admin";

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
    const customHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        })) as Headers;
    // add your own headers here
    customHeaders.set('Authorization', `Bearer ${localStorage.getItem("token")}`);
    options.headers = customHeaders;
    return fetchUtils.fetchJson(url, options);
}

const apiUrl = `${import.meta.env.VITE_API_URL}/cms`

export const dataProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetListParams): Promise<GetListResult<RecordType>> {
        const { field, order } = params.sort
        const { page, perPage } = params.pagination

        const sort = `sort=${field}&order=${order.toLowerCase()}`
        const pagination = `page=${page - 1}&pageSize=${perPage}`
        const filter = `filter=${encodeURIComponent(JSON.stringify(params.filter))}`

        const url = `${apiUrl}/${resource}?${sort}&${pagination}&${filter}`
        const { json } = await fetchJson(url);
        return {
            data: json.data,
            total: json.total,
        };
    },
    getOne: async function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetOneParams<RecordType>): Promise<GetOneResult<RecordType>> {
        const url = `${apiUrl}/${resource}/${params.id}`
        const { json } = await fetchJson(url);
        return { data: json };
    },
    getMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    getManyReference: async function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
        const { target, id } = params
        const { field, order } = params.sort
        const { page, perPage } = params.pagination

        const sort = `sort=${field}&order=${order.toLowerCase()}`
        const pagination = `page=${page - 1}&pageSize=${perPage}`
        const filter = `filter=${encodeURIComponent(JSON.stringify({
            [target]: id
        }))}`
        const url = `${apiUrl}/${resource}?${sort}&${pagination}&${filter}`
        const { json } = await fetchJson(url);
        return {
            data: json.data,
            total: json.total,
        };
    },
    update: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateParams<any>): Promise<UpdateResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    updateMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateManyParams<any>): Promise<UpdateManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    create: function <RecordType extends Omit<RaRecord<Identifier>, "id"> = any, ResultRecordType extends RaRecord<Identifier> = RecordType & { id: Identifier; }>(resource: string, params: CreateParams<any>): Promise<CreateResult<ResultRecordType>> {
        throw new Error("Function not implemented.");
    },
    delete: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    deleteMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    }
}

