import { stringify } from "querystring";
import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult, fetchUtils } from "ra-core";
import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

// // const apiUrl = "https://jsonplaceholder.typicode.com";
// const httpClient = fetchUtils.fetchJson;

// export const dataProvider: DataProvider = {
//   getList: async (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     const { headers, json } = await httpClient(url);
//     return ({
//       data: json,
//       total: parseInt((headers.get('content-range') || "0").split('/').pop() || '0', 10),
//     });
//   },
//   getOne: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetOneParams<RecordType>): Promise<GetOneResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   getMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   getManyReference: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   update: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateParams<any>): Promise<UpdateResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   updateMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateManyParams<any>): Promise<UpdateManyResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   create: function <RecordType extends Omit<RaRecord<Identifier>, "id"> = any, ResultRecordType extends RaRecord<Identifier> = RecordType & { id: Identifier; }>(resource: string, params: CreateParams<any>): Promise<CreateResult<ResultRecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   delete: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   },
//   deleteMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
//     throw new Error("Function not implemented.");
//   }
// }
