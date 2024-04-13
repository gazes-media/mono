
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Anime
 * 
 */
export type Anime = $Result.DefaultSelection<Prisma.$AnimePayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Latest
 * 
 */
export type Latest = $Result.DefaultSelection<Prisma.$LatestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AnimeHistory
 * 
 */
export type AnimeHistory = $Result.DefaultSelection<Prisma.$AnimeHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Anime
 * const anime = await prisma.anime.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Anime
   * const anime = await prisma.anime.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.anime`: Exposes CRUD operations for the **Anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.AnimeDelegate<ExtArgs>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs>;

  /**
   * `prisma.latest`: Exposes CRUD operations for the **Latest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Latests
    * const latests = await prisma.latest.findMany()
    * ```
    */
  get latest(): Prisma.LatestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.animeHistory`: Exposes CRUD operations for the **AnimeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeHistories
    * const animeHistories = await prisma.animeHistory.findMany()
    * ```
    */
  get animeHistory(): Prisma.AnimeHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Anime: 'Anime',
    Episode: 'Episode',
    Latest: 'Latest',
    User: 'User',
    AnimeHistory: 'AnimeHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'anime' | 'episode' | 'latest' | 'user' | 'animeHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Anime: {
        payload: Prisma.$AnimePayload<ExtArgs>
        fields: Prisma.AnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findMany: {
            args: Prisma.AnimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          create: {
            args: Prisma.AnimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          createMany: {
            args: Prisma.AnimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          update: {
            args: Prisma.AnimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.AnimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Latest: {
        payload: Prisma.$LatestPayload<ExtArgs>
        fields: Prisma.LatestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LatestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LatestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          findFirst: {
            args: Prisma.LatestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LatestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          findMany: {
            args: Prisma.LatestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>[]
          }
          create: {
            args: Prisma.LatestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          createMany: {
            args: Prisma.LatestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LatestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          update: {
            args: Prisma.LatestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          deleteMany: {
            args: Prisma.LatestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LatestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LatestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          aggregate: {
            args: Prisma.LatestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLatest>
          }
          groupBy: {
            args: Prisma.LatestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LatestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LatestCountArgs<ExtArgs>,
            result: $Utils.Optional<LatestCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AnimeHistory: {
        payload: Prisma.$AnimeHistoryPayload<ExtArgs>
        fields: Prisma.AnimeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          findFirst: {
            args: Prisma.AnimeHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          findMany: {
            args: Prisma.AnimeHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>[]
          }
          create: {
            args: Prisma.AnimeHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          createMany: {
            args: Prisma.AnimeHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimeHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          update: {
            args: Prisma.AnimeHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AnimeHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimeHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          aggregate: {
            args: Prisma.AnimeHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnimeHistory>
          }
          groupBy: {
            args: Prisma.AnimeHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimeHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    episodes: number
    latest: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | AnimeCountOutputTypeCountEpisodesArgs
    latest?: boolean | AnimeCountOutputTypeCountLatestArgs
  }

  // Custom InputTypes

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }


  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountLatestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestWhereInput
  }



  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    history: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | EpisodeCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | UserCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeAvgAggregateOutputType = {
    id: number | null
    popularity: number | null
    nb_eps: number | null
  }

  export type AnimeSumAggregateOutputType = {
    id: number | null
    popularity: number | null
    nb_eps: number | null
  }

  export type AnimeMinAggregateOutputType = {
    id: number | null
    title: string | null
    title_english: string | null
    title_romanji: string | null
    title_french: string | null
    others: string | null
    type: string | null
    status: string | null
    popularity: number | null
    url: string | null
    url_image: string | null
    score: string | null
    start_date_year: string | null
    nb_eps: number | null
    synopsis: string | null
    cover_url: string | null
  }

  export type AnimeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    title_english: string | null
    title_romanji: string | null
    title_french: string | null
    others: string | null
    type: string | null
    status: string | null
    popularity: number | null
    url: string | null
    url_image: string | null
    score: string | null
    start_date_year: string | null
    nb_eps: number | null
    synopsis: string | null
    cover_url: string | null
  }

  export type AnimeCountAggregateOutputType = {
    id: number
    title: number
    title_english: number
    title_romanji: number
    title_french: number
    others: number
    type: number
    status: number
    popularity: number
    url: number
    genres: number
    url_image: number
    score: number
    start_date_year: number
    nb_eps: number
    synopsis: number
    cover_url: number
    _all: number
  }


  export type AnimeAvgAggregateInputType = {
    id?: true
    popularity?: true
    nb_eps?: true
  }

  export type AnimeSumAggregateInputType = {
    id?: true
    popularity?: true
    nb_eps?: true
  }

  export type AnimeMinAggregateInputType = {
    id?: true
    title?: true
    title_english?: true
    title_romanji?: true
    title_french?: true
    others?: true
    type?: true
    status?: true
    popularity?: true
    url?: true
    url_image?: true
    score?: true
    start_date_year?: true
    nb_eps?: true
    synopsis?: true
    cover_url?: true
  }

  export type AnimeMaxAggregateInputType = {
    id?: true
    title?: true
    title_english?: true
    title_romanji?: true
    title_french?: true
    others?: true
    type?: true
    status?: true
    popularity?: true
    url?: true
    url_image?: true
    score?: true
    start_date_year?: true
    nb_eps?: true
    synopsis?: true
    cover_url?: true
  }

  export type AnimeCountAggregateInputType = {
    id?: true
    title?: true
    title_english?: true
    title_romanji?: true
    title_french?: true
    others?: true
    type?: true
    status?: true
    popularity?: true
    url?: true
    genres?: true
    url_image?: true
    score?: true
    start_date_year?: true
    nb_eps?: true
    synopsis?: true
    cover_url?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to aggregate.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type AnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithAggregationInput | AnimeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: AnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _avg?: AnimeAvgAggregateInputType
    _sum?: AnimeSumAggregateInputType
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    id: number
    title: string
    title_english: string | null
    title_romanji: string | null
    title_french: string | null
    others: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres: string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps: number | null
    synopsis: string | null
    cover_url: string | null
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    title_english?: boolean
    title_romanji?: boolean
    title_french?: boolean
    others?: boolean
    type?: boolean
    status?: boolean
    popularity?: boolean
    url?: boolean
    genres?: boolean
    url_image?: boolean
    score?: boolean
    start_date_year?: boolean
    nb_eps?: boolean
    synopsis?: boolean
    cover_url?: boolean
    episodes?: boolean | Anime$episodesArgs<ExtArgs>
    latest?: boolean | Anime$latestArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectScalar = {
    id?: boolean
    title?: boolean
    title_english?: boolean
    title_romanji?: boolean
    title_french?: boolean
    others?: boolean
    type?: boolean
    status?: boolean
    popularity?: boolean
    url?: boolean
    genres?: boolean
    url_image?: boolean
    score?: boolean
    start_date_year?: boolean
    nb_eps?: boolean
    synopsis?: boolean
    cover_url?: boolean
  }

  export type AnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Anime$episodesArgs<ExtArgs>
    latest?: boolean | Anime$latestArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anime"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      latest: Prisma.$LatestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      title_english: string | null
      title_romanji: string | null
      title_french: string | null
      others: string | null
      type: string
      status: string
      popularity: number
      url: string
      genres: string[]
      url_image: string
      score: string
      start_date_year: string
      nb_eps: number | null
      synopsis: string | null
      cover_url: string | null
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }


  type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimePayload, S>

  type AnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface AnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anime'], meta: { name: 'Anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {AnimeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Anime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeWithIdOnly = await prisma.anime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Anime.
     * @param {AnimeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
    **/
    create<T extends AnimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeCreateArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Anime.
     *     @param {AnimeCreateManyArgs} args - Arguments to create many Anime.
     *     @example
     *     // Create many Anime
     *     const anime = await prisma.anime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Anime.
     * @param {AnimeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
    **/
    delete<T extends AnimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeDeleteArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Anime.
     * @param {AnimeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpdateArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Anime.
     * @param {AnimeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anime.
     * @param {AnimeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
    **/
    upsert<T extends AnimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpsertArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends AnimeCountArgs>(
      args?: Subset<T, AnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anime model
   */
  readonly fields: AnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    episodes<T extends Anime$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Anime$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'> | Null>;

    latest<T extends Anime$latestArgs<ExtArgs> = {}>(args?: Subset<T, Anime$latestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Anime model
   */ 
  interface AnimeFieldRefs {
    readonly id: FieldRef<"Anime", 'Int'>
    readonly title: FieldRef<"Anime", 'String'>
    readonly title_english: FieldRef<"Anime", 'String'>
    readonly title_romanji: FieldRef<"Anime", 'String'>
    readonly title_french: FieldRef<"Anime", 'String'>
    readonly others: FieldRef<"Anime", 'String'>
    readonly type: FieldRef<"Anime", 'String'>
    readonly status: FieldRef<"Anime", 'String'>
    readonly popularity: FieldRef<"Anime", 'Float'>
    readonly url: FieldRef<"Anime", 'String'>
    readonly genres: FieldRef<"Anime", 'String[]'>
    readonly url_image: FieldRef<"Anime", 'String'>
    readonly score: FieldRef<"Anime", 'String'>
    readonly start_date_year: FieldRef<"Anime", 'String'>
    readonly nb_eps: FieldRef<"Anime", 'Int'>
    readonly synopsis: FieldRef<"Anime", 'String'>
    readonly cover_url: FieldRef<"Anime", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Anime findUnique
   */
  export type AnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }


  /**
   * Anime findUniqueOrThrow
   */
  export type AnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }


  /**
   * Anime findFirst
   */
  export type AnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }


  /**
   * Anime findFirstOrThrow
   */
  export type AnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }


  /**
   * Anime findMany
   */
  export type AnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }


  /**
   * Anime create
   */
  export type AnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Anime.
     */
    data: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
  }


  /**
   * Anime createMany
   */
  export type AnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Anime update
   */
  export type AnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Anime.
     */
    data: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
    /**
     * Choose, which Anime to update.
     */
    where: AnimeWhereUniqueInput
  }


  /**
   * Anime updateMany
   */
  export type AnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
  }


  /**
   * Anime upsert
   */
  export type AnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Anime to update in case it exists.
     */
    where: AnimeWhereUniqueInput
    /**
     * In case the Anime found by the `where` argument doesn't exist, create a new Anime with this data.
     */
    create: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
    /**
     * In case the Anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
  }


  /**
   * Anime delete
   */
  export type AnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter which Anime to delete.
     */
    where: AnimeWhereUniqueInput
  }


  /**
   * Anime deleteMany
   */
  export type AnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to delete
     */
    where?: AnimeWhereInput
  }


  /**
   * Anime.episodes
   */
  export type Anime$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Anime.latest
   */
  export type Anime$latestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    where?: LatestWhereInput
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: LatestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }


  /**
   * Anime without action
   */
  export type AnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeInclude<ExtArgs> | null
  }



  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    num: number | null
    anime_id: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    num: number | null
    anime_id: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    time: string | null
    episode: string | null
    num: number | null
    url: string | null
    url_image: string | null
    anime_id: number | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    time: string | null
    episode: string | null
    num: number | null
    url: string | null
    url_image: string | null
    anime_id: number | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    time: number
    episode: number
    num: number
    url: number
    url_image: number
    anime_id: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    num?: true
    anime_id?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    num?: true
    anime_id?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    episode?: boolean
    num?: boolean
    url?: boolean
    url_image?: boolean
    anime_id?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    history?: boolean | Episode$historyArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    time?: boolean
    episode?: boolean
    num?: boolean
    url?: boolean
    url_image?: boolean
    anime_id?: boolean
  }

  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    history?: boolean | Episode$historyArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>
      history: Prisma.$AnimeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time: string
      episode: string
      num: number
      url: string
      url_image: string
      anime_id: number
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }


  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Episode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EpisodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
    **/
    create<T extends EpisodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Episodes.
     *     @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     *     @example
     *     // Create many Episodes
     *     const episode = await prisma.episode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EpisodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
    **/
    delete<T extends EpisodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    history<T extends Episode$historyArgs<ExtArgs> = {}>(args?: Subset<T, Episode$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Episode model
   */ 
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly time: FieldRef<"Episode", 'String'>
    readonly episode: FieldRef<"Episode", 'String'>
    readonly num: FieldRef<"Episode", 'Int'>
    readonly url: FieldRef<"Episode", 'String'>
    readonly url_image: FieldRef<"Episode", 'String'>
    readonly anime_id: FieldRef<"Episode", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }


  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }


  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode.history
   */
  export type Episode$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: AnimeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }


  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
  }



  /**
   * Model Latest
   */

  export type AggregateLatest = {
    _count: LatestCountAggregateOutputType | null
    _avg: LatestAvgAggregateOutputType | null
    _sum: LatestSumAggregateOutputType | null
    _min: LatestMinAggregateOutputType | null
    _max: LatestMaxAggregateOutputType | null
  }

  export type LatestAvgAggregateOutputType = {
    id: number | null
    anime_id: number | null
  }

  export type LatestSumAggregateOutputType = {
    id: number | null
    anime_id: number | null
  }

  export type LatestMinAggregateOutputType = {
    id: number | null
    timestamp: string | null
    episode: string | null
    lang: string | null
    anime_url: string | null
    anime_id: number | null
  }

  export type LatestMaxAggregateOutputType = {
    id: number | null
    timestamp: string | null
    episode: string | null
    lang: string | null
    anime_url: string | null
    anime_id: number | null
  }

  export type LatestCountAggregateOutputType = {
    id: number
    timestamp: number
    episode: number
    lang: number
    anime_url: number
    anime_id: number
    _all: number
  }


  export type LatestAvgAggregateInputType = {
    id?: true
    anime_id?: true
  }

  export type LatestSumAggregateInputType = {
    id?: true
    anime_id?: true
  }

  export type LatestMinAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
  }

  export type LatestMaxAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
  }

  export type LatestCountAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
    _all?: true
  }

  export type LatestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Latest to aggregate.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Latests
    **/
    _count?: true | LatestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LatestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LatestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LatestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LatestMaxAggregateInputType
  }

  export type GetLatestAggregateType<T extends LatestAggregateArgs> = {
        [P in keyof T & keyof AggregateLatest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLatest[P]>
      : GetScalarType<T[P], AggregateLatest[P]>
  }




  export type LatestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestWhereInput
    orderBy?: LatestOrderByWithAggregationInput | LatestOrderByWithAggregationInput[]
    by: LatestScalarFieldEnum[] | LatestScalarFieldEnum
    having?: LatestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LatestCountAggregateInputType | true
    _avg?: LatestAvgAggregateInputType
    _sum?: LatestSumAggregateInputType
    _min?: LatestMinAggregateInputType
    _max?: LatestMaxAggregateInputType
  }

  export type LatestGroupByOutputType = {
    id: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
    _count: LatestCountAggregateOutputType | null
    _avg: LatestAvgAggregateOutputType | null
    _sum: LatestSumAggregateOutputType | null
    _min: LatestMinAggregateOutputType | null
    _max: LatestMaxAggregateOutputType | null
  }

  type GetLatestGroupByPayload<T extends LatestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LatestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LatestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LatestGroupByOutputType[P]>
            : GetScalarType<T[P], LatestGroupByOutputType[P]>
        }
      >
    >


  export type LatestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    episode?: boolean
    lang?: boolean
    anime_url?: boolean
    anime_id?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["latest"]>

  export type LatestSelectScalar = {
    id?: boolean
    timestamp?: boolean
    episode?: boolean
    lang?: boolean
    anime_url?: boolean
    anime_id?: boolean
  }

  export type LatestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }


  export type $LatestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Latest"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: string
      episode: string
      lang: string
      anime_url: string
      anime_id: number
    }, ExtArgs["result"]["latest"]>
    composites: {}
  }


  type LatestGetPayload<S extends boolean | null | undefined | LatestDefaultArgs> = $Result.GetResult<Prisma.$LatestPayload, S>

  type LatestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LatestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LatestCountAggregateInputType | true
    }

  export interface LatestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Latest'], meta: { name: 'Latest' } }
    /**
     * Find zero or one Latest that matches the filter.
     * @param {LatestFindUniqueArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LatestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LatestFindUniqueArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Latest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LatestFindUniqueOrThrowArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LatestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Latest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindFirstArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LatestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindFirstArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Latest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindFirstOrThrowArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LatestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Latests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Latests
     * const latests = await prisma.latest.findMany()
     * 
     * // Get first 10 Latests
     * const latests = await prisma.latest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const latestWithIdOnly = await prisma.latest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LatestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Latest.
     * @param {LatestCreateArgs} args - Arguments to create a Latest.
     * @example
     * // Create one Latest
     * const Latest = await prisma.latest.create({
     *   data: {
     *     // ... data to create a Latest
     *   }
     * })
     * 
    **/
    create<T extends LatestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestCreateArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Latests.
     *     @param {LatestCreateManyArgs} args - Arguments to create many Latests.
     *     @example
     *     // Create many Latests
     *     const latest = await prisma.latest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LatestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Latest.
     * @param {LatestDeleteArgs} args - Arguments to delete one Latest.
     * @example
     * // Delete one Latest
     * const Latest = await prisma.latest.delete({
     *   where: {
     *     // ... filter to delete one Latest
     *   }
     * })
     * 
    **/
    delete<T extends LatestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LatestDeleteArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Latest.
     * @param {LatestUpdateArgs} args - Arguments to update one Latest.
     * @example
     * // Update one Latest
     * const latest = await prisma.latest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LatestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpdateArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Latests.
     * @param {LatestDeleteManyArgs} args - Arguments to filter Latests to delete.
     * @example
     * // Delete a few Latests
     * const { count } = await prisma.latest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LatestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Latests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Latests
     * const latest = await prisma.latest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LatestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Latest.
     * @param {LatestUpsertArgs} args - Arguments to update or create a Latest.
     * @example
     * // Update or create a Latest
     * const latest = await prisma.latest.upsert({
     *   create: {
     *     // ... data to create a Latest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Latest we want to update
     *   }
     * })
    **/
    upsert<T extends LatestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpsertArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Latests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestCountArgs} args - Arguments to filter Latests to count.
     * @example
     * // Count the number of Latests
     * const count = await prisma.latest.count({
     *   where: {
     *     // ... the filter for the Latests we want to count
     *   }
     * })
    **/
    count<T extends LatestCountArgs>(
      args?: Subset<T, LatestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LatestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Latest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LatestAggregateArgs>(args: Subset<T, LatestAggregateArgs>): Prisma.PrismaPromise<GetLatestAggregateType<T>>

    /**
     * Group by Latest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LatestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LatestGroupByArgs['orderBy'] }
        : { orderBy?: LatestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LatestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLatestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Latest model
   */
  readonly fields: LatestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Latest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LatestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Latest model
   */ 
  interface LatestFieldRefs {
    readonly id: FieldRef<"Latest", 'Int'>
    readonly timestamp: FieldRef<"Latest", 'String'>
    readonly episode: FieldRef<"Latest", 'String'>
    readonly lang: FieldRef<"Latest", 'String'>
    readonly anime_url: FieldRef<"Latest", 'String'>
    readonly anime_id: FieldRef<"Latest", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Latest findUnique
   */
  export type LatestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where: LatestWhereUniqueInput
  }


  /**
   * Latest findUniqueOrThrow
   */
  export type LatestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where: LatestWhereUniqueInput
  }


  /**
   * Latest findFirst
   */
  export type LatestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Latests.
     */
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }


  /**
   * Latest findFirstOrThrow
   */
  export type LatestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Latests.
     */
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }


  /**
   * Latest findMany
   */
  export type LatestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latests to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }


  /**
   * Latest create
   */
  export type LatestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The data needed to create a Latest.
     */
    data: XOR<LatestCreateInput, LatestUncheckedCreateInput>
  }


  /**
   * Latest createMany
   */
  export type LatestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Latests.
     */
    data: LatestCreateManyInput | LatestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Latest update
   */
  export type LatestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The data needed to update a Latest.
     */
    data: XOR<LatestUpdateInput, LatestUncheckedUpdateInput>
    /**
     * Choose, which Latest to update.
     */
    where: LatestWhereUniqueInput
  }


  /**
   * Latest updateMany
   */
  export type LatestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Latests.
     */
    data: XOR<LatestUpdateManyMutationInput, LatestUncheckedUpdateManyInput>
    /**
     * Filter which Latests to update
     */
    where?: LatestWhereInput
  }


  /**
   * Latest upsert
   */
  export type LatestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The filter to search for the Latest to update in case it exists.
     */
    where: LatestWhereUniqueInput
    /**
     * In case the Latest found by the `where` argument doesn't exist, create a new Latest with this data.
     */
    create: XOR<LatestCreateInput, LatestUncheckedCreateInput>
    /**
     * In case the Latest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LatestUpdateInput, LatestUncheckedUpdateInput>
  }


  /**
   * Latest delete
   */
  export type LatestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter which Latest to delete.
     */
    where: LatestWhereUniqueInput
  }


  /**
   * Latest deleteMany
   */
  export type LatestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Latests to delete
     */
    where?: LatestWhereInput
  }


  /**
   * Latest without action
   */
  export type LatestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    suscribtion_type: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    suscribtion_type: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    suscribtion_type: number | null
    suscribtion_end: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    suscribtion_type: number | null
    suscribtion_end: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    discord_id: number
    firebase_id: number
    avatar_url: number
    created_at: number
    updated_at: number
    suscribtion_type: number
    suscribtion_end: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    suscribtion_type?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    suscribtion_type?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    username: string
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date
    updated_at: Date
    suscribtion_type: number | null
    suscribtion_end: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    discord_id?: boolean
    firebase_id?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    suscribtion_type?: boolean
    suscribtion_end?: boolean
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    discord_id?: boolean
    firebase_id?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    suscribtion_type?: boolean
    suscribtion_end?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      history: Prisma.$AnimeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      username: string
      discord_id: string | null
      firebase_id: string | null
      avatar_url: string | null
      created_at: Date
      updated_at: Date
      suscribtion_type: number | null
      suscribtion_end: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly discord_id: FieldRef<"User", 'String'>
    readonly firebase_id: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly suscribtion_type: FieldRef<"User", 'Int'>
    readonly suscribtion_end: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: AnimeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model AnimeHistory
   */

  export type AggregateAnimeHistory = {
    _count: AnimeHistoryCountAggregateOutputType | null
    _avg: AnimeHistoryAvgAggregateOutputType | null
    _sum: AnimeHistorySumAggregateOutputType | null
    _min: AnimeHistoryMinAggregateOutputType | null
    _max: AnimeHistoryMaxAggregateOutputType | null
  }

  export type AnimeHistoryAvgAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistorySumAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryMinAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryMaxAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryCountAggregateOutputType = {
    id: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
    _all: number
  }


  export type AnimeHistoryAvgAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistorySumAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryMinAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryCountAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
    _all?: true
  }

  export type AnimeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeHistory to aggregate.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeHistories
    **/
    _count?: true | AnimeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeHistoryMaxAggregateInputType
  }

  export type GetAnimeHistoryAggregateType<T extends AnimeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeHistory[P]>
      : GetScalarType<T[P], AggregateAnimeHistory[P]>
  }




  export type AnimeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithAggregationInput | AnimeHistoryOrderByWithAggregationInput[]
    by: AnimeHistoryScalarFieldEnum[] | AnimeHistoryScalarFieldEnum
    having?: AnimeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeHistoryCountAggregateInputType | true
    _avg?: AnimeHistoryAvgAggregateInputType
    _sum?: AnimeHistorySumAggregateInputType
    _min?: AnimeHistoryMinAggregateInputType
    _max?: AnimeHistoryMaxAggregateInputType
  }

  export type AnimeHistoryGroupByOutputType = {
    id: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
    _count: AnimeHistoryCountAggregateOutputType | null
    _avg: AnimeHistoryAvgAggregateOutputType | null
    _sum: AnimeHistorySumAggregateOutputType | null
    _min: AnimeHistoryMinAggregateOutputType | null
    _max: AnimeHistoryMaxAggregateOutputType | null
  }

  type GetAnimeHistoryGroupByPayload<T extends AnimeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AnimeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    duration?: boolean
    episode_id?: boolean
    user_id?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeHistory"]>

  export type AnimeHistorySelectScalar = {
    id?: boolean
    timestamp?: boolean
    duration?: boolean
    episode_id?: boolean
    user_id?: boolean
  }

  export type AnimeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AnimeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeHistory"
    objects: {
      episode: Prisma.$EpisodePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: number
      duration: number
      episode_id: number
      user_id: number
    }, ExtArgs["result"]["animeHistory"]>
    composites: {}
  }


  type AnimeHistoryGetPayload<S extends boolean | null | undefined | AnimeHistoryDefaultArgs> = $Result.GetResult<Prisma.$AnimeHistoryPayload, S>

  type AnimeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimeHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnimeHistoryCountAggregateInputType | true
    }

  export interface AnimeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeHistory'], meta: { name: 'AnimeHistory' } }
    /**
     * Find zero or one AnimeHistory that matches the filter.
     * @param {AnimeHistoryFindUniqueArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimeHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AnimeHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimeHistoryFindUniqueOrThrowArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AnimeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindFirstArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimeHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AnimeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindFirstOrThrowArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimeHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AnimeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeHistories
     * const animeHistories = await prisma.animeHistory.findMany()
     * 
     * // Get first 10 AnimeHistories
     * const animeHistories = await prisma.animeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeHistoryWithIdOnly = await prisma.animeHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnimeHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AnimeHistory.
     * @param {AnimeHistoryCreateArgs} args - Arguments to create a AnimeHistory.
     * @example
     * // Create one AnimeHistory
     * const AnimeHistory = await prisma.animeHistory.create({
     *   data: {
     *     // ... data to create a AnimeHistory
     *   }
     * })
     * 
    **/
    create<T extends AnimeHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryCreateArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AnimeHistories.
     *     @param {AnimeHistoryCreateManyArgs} args - Arguments to create many AnimeHistories.
     *     @example
     *     // Create many AnimeHistories
     *     const animeHistory = await prisma.animeHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimeHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnimeHistory.
     * @param {AnimeHistoryDeleteArgs} args - Arguments to delete one AnimeHistory.
     * @example
     * // Delete one AnimeHistory
     * const AnimeHistory = await prisma.animeHistory.delete({
     *   where: {
     *     // ... filter to delete one AnimeHistory
     *   }
     * })
     * 
    **/
    delete<T extends AnimeHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryDeleteArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AnimeHistory.
     * @param {AnimeHistoryUpdateArgs} args - Arguments to update one AnimeHistory.
     * @example
     * // Update one AnimeHistory
     * const animeHistory = await prisma.animeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimeHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpdateArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AnimeHistories.
     * @param {AnimeHistoryDeleteManyArgs} args - Arguments to filter AnimeHistories to delete.
     * @example
     * // Delete a few AnimeHistories
     * const { count } = await prisma.animeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimeHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeHistories
     * const animeHistory = await prisma.animeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimeHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnimeHistory.
     * @param {AnimeHistoryUpsertArgs} args - Arguments to update or create a AnimeHistory.
     * @example
     * // Update or create a AnimeHistory
     * const animeHistory = await prisma.animeHistory.upsert({
     *   create: {
     *     // ... data to create a AnimeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeHistory we want to update
     *   }
     * })
    **/
    upsert<T extends AnimeHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpsertArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AnimeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryCountArgs} args - Arguments to filter AnimeHistories to count.
     * @example
     * // Count the number of AnimeHistories
     * const count = await prisma.animeHistory.count({
     *   where: {
     *     // ... the filter for the AnimeHistories we want to count
     *   }
     * })
    **/
    count<T extends AnimeHistoryCountArgs>(
      args?: Subset<T, AnimeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeHistoryAggregateArgs>(args: Subset<T, AnimeHistoryAggregateArgs>): Prisma.PrismaPromise<GetAnimeHistoryAggregateType<T>>

    /**
     * Group by AnimeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AnimeHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeHistory model
   */
  readonly fields: AnimeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AnimeHistory model
   */ 
  interface AnimeHistoryFieldRefs {
    readonly id: FieldRef<"AnimeHistory", 'Int'>
    readonly timestamp: FieldRef<"AnimeHistory", 'Int'>
    readonly duration: FieldRef<"AnimeHistory", 'Int'>
    readonly episode_id: FieldRef<"AnimeHistory", 'Int'>
    readonly user_id: FieldRef<"AnimeHistory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * AnimeHistory findUnique
   */
  export type AnimeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where: AnimeHistoryWhereUniqueInput
  }


  /**
   * AnimeHistory findUniqueOrThrow
   */
  export type AnimeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where: AnimeHistoryWhereUniqueInput
  }


  /**
   * AnimeHistory findFirst
   */
  export type AnimeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeHistories.
     */
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }


  /**
   * AnimeHistory findFirstOrThrow
   */
  export type AnimeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeHistories.
     */
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }


  /**
   * AnimeHistory findMany
   */
  export type AnimeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistories to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }


  /**
   * AnimeHistory create
   */
  export type AnimeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeHistory.
     */
    data: XOR<AnimeHistoryCreateInput, AnimeHistoryUncheckedCreateInput>
  }


  /**
   * AnimeHistory createMany
   */
  export type AnimeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeHistories.
     */
    data: AnimeHistoryCreateManyInput | AnimeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AnimeHistory update
   */
  export type AnimeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeHistory.
     */
    data: XOR<AnimeHistoryUpdateInput, AnimeHistoryUncheckedUpdateInput>
    /**
     * Choose, which AnimeHistory to update.
     */
    where: AnimeHistoryWhereUniqueInput
  }


  /**
   * AnimeHistory updateMany
   */
  export type AnimeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeHistories.
     */
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnimeHistories to update
     */
    where?: AnimeHistoryWhereInput
  }


  /**
   * AnimeHistory upsert
   */
  export type AnimeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeHistory to update in case it exists.
     */
    where: AnimeHistoryWhereUniqueInput
    /**
     * In case the AnimeHistory found by the `where` argument doesn't exist, create a new AnimeHistory with this data.
     */
    create: XOR<AnimeHistoryCreateInput, AnimeHistoryUncheckedCreateInput>
    /**
     * In case the AnimeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeHistoryUpdateInput, AnimeHistoryUncheckedUpdateInput>
  }


  /**
   * AnimeHistory delete
   */
  export type AnimeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter which AnimeHistory to delete.
     */
    where: AnimeHistoryWhereUniqueInput
  }


  /**
   * AnimeHistory deleteMany
   */
  export type AnimeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeHistories to delete
     */
    where?: AnimeHistoryWhereInput
  }


  /**
   * AnimeHistory without action
   */
  export type AnimeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnimeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    title_english: 'title_english',
    title_romanji: 'title_romanji',
    title_french: 'title_french',
    others: 'others',
    type: 'type',
    status: 'status',
    popularity: 'popularity',
    url: 'url',
    genres: 'genres',
    url_image: 'url_image',
    score: 'score',
    start_date_year: 'start_date_year',
    nb_eps: 'nb_eps',
    synopsis: 'synopsis',
    cover_url: 'cover_url'
  };

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    time: 'time',
    episode: 'episode',
    num: 'num',
    url: 'url',
    url_image: 'url_image',
    anime_id: 'anime_id'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const LatestScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    episode: 'episode',
    lang: 'lang',
    anime_url: 'anime_url',
    anime_id: 'anime_id'
  };

  export type LatestScalarFieldEnum = (typeof LatestScalarFieldEnum)[keyof typeof LatestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    discord_id: 'discord_id',
    firebase_id: 'firebase_id',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    suscribtion_type: 'suscribtion_type',
    suscribtion_end: 'suscribtion_end'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnimeHistoryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    duration: 'duration',
    episode_id: 'episode_id',
    user_id: 'user_id'
  };

  export type AnimeHistoryScalarFieldEnum = (typeof AnimeHistoryScalarFieldEnum)[keyof typeof AnimeHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AnimeOrderByRelevanceFieldEnum: {
    title: 'title',
    title_english: 'title_english',
    title_romanji: 'title_romanji',
    title_french: 'title_french',
    others: 'others',
    type: 'type',
    status: 'status',
    url: 'url',
    genres: 'genres',
    url_image: 'url_image',
    score: 'score',
    start_date_year: 'start_date_year',
    synopsis: 'synopsis',
    cover_url: 'cover_url'
  };

  export type AnimeOrderByRelevanceFieldEnum = (typeof AnimeOrderByRelevanceFieldEnum)[keyof typeof AnimeOrderByRelevanceFieldEnum]


  export const EpisodeOrderByRelevanceFieldEnum: {
    time: 'time',
    episode: 'episode',
    url: 'url',
    url_image: 'url_image'
  };

  export type EpisodeOrderByRelevanceFieldEnum = (typeof EpisodeOrderByRelevanceFieldEnum)[keyof typeof EpisodeOrderByRelevanceFieldEnum]


  export const LatestOrderByRelevanceFieldEnum: {
    timestamp: 'timestamp',
    episode: 'episode',
    lang: 'lang',
    anime_url: 'anime_url'
  };

  export type LatestOrderByRelevanceFieldEnum = (typeof LatestOrderByRelevanceFieldEnum)[keyof typeof LatestOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    username: 'username',
    discord_id: 'discord_id',
    firebase_id: 'firebase_id',
    avatar_url: 'avatar_url'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AnimeWhereInput = {
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    id?: IntFilter<"Anime"> | number
    title?: StringFilter<"Anime"> | string
    title_english?: StringNullableFilter<"Anime"> | string | null
    title_romanji?: StringNullableFilter<"Anime"> | string | null
    title_french?: StringNullableFilter<"Anime"> | string | null
    others?: StringNullableFilter<"Anime"> | string | null
    type?: StringFilter<"Anime"> | string
    status?: StringFilter<"Anime"> | string
    popularity?: FloatFilter<"Anime"> | number
    url?: StringFilter<"Anime"> | string
    genres?: StringNullableListFilter<"Anime">
    url_image?: StringFilter<"Anime"> | string
    score?: StringFilter<"Anime"> | string
    start_date_year?: StringFilter<"Anime"> | string
    nb_eps?: IntNullableFilter<"Anime"> | number | null
    synopsis?: StringNullableFilter<"Anime"> | string | null
    cover_url?: StringNullableFilter<"Anime"> | string | null
    episodes?: EpisodeListRelationFilter
    latest?: LatestListRelationFilter
  }

  export type AnimeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    title_english?: SortOrderInput | SortOrder
    title_romanji?: SortOrderInput | SortOrder
    title_french?: SortOrderInput | SortOrder
    others?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    url?: SortOrder
    genres?: SortOrder
    url_image?: SortOrder
    score?: SortOrder
    start_date_year?: SortOrder
    nb_eps?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    latest?: LatestOrderByRelationAggregateInput
    _relevance?: AnimeOrderByRelevanceInput
  }

  export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    title?: StringFilter<"Anime"> | string
    title_english?: StringNullableFilter<"Anime"> | string | null
    title_romanji?: StringNullableFilter<"Anime"> | string | null
    title_french?: StringNullableFilter<"Anime"> | string | null
    others?: StringNullableFilter<"Anime"> | string | null
    type?: StringFilter<"Anime"> | string
    status?: StringFilter<"Anime"> | string
    popularity?: FloatFilter<"Anime"> | number
    url?: StringFilter<"Anime"> | string
    genres?: StringNullableListFilter<"Anime">
    url_image?: StringFilter<"Anime"> | string
    score?: StringFilter<"Anime"> | string
    start_date_year?: StringFilter<"Anime"> | string
    nb_eps?: IntNullableFilter<"Anime"> | number | null
    synopsis?: StringNullableFilter<"Anime"> | string | null
    cover_url?: StringNullableFilter<"Anime"> | string | null
    episodes?: EpisodeListRelationFilter
    latest?: LatestListRelationFilter
  }, "id" | "id">

  export type AnimeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    title_english?: SortOrderInput | SortOrder
    title_romanji?: SortOrderInput | SortOrder
    title_french?: SortOrderInput | SortOrder
    others?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    url?: SortOrder
    genres?: SortOrder
    url_image?: SortOrder
    score?: SortOrder
    start_date_year?: SortOrder
    nb_eps?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    _count?: AnimeCountOrderByAggregateInput
    _avg?: AnimeAvgOrderByAggregateInput
    _max?: AnimeMaxOrderByAggregateInput
    _min?: AnimeMinOrderByAggregateInput
    _sum?: AnimeSumOrderByAggregateInput
  }

  export type AnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anime"> | number
    title?: StringWithAggregatesFilter<"Anime"> | string
    title_english?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    title_romanji?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    title_french?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    others?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    type?: StringWithAggregatesFilter<"Anime"> | string
    status?: StringWithAggregatesFilter<"Anime"> | string
    popularity?: FloatWithAggregatesFilter<"Anime"> | number
    url?: StringWithAggregatesFilter<"Anime"> | string
    genres?: StringNullableListFilter<"Anime">
    url_image?: StringWithAggregatesFilter<"Anime"> | string
    score?: StringWithAggregatesFilter<"Anime"> | string
    start_date_year?: StringWithAggregatesFilter<"Anime"> | string
    nb_eps?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    synopsis?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    cover_url?: StringNullableWithAggregatesFilter<"Anime"> | string | null
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url?: StringFilter<"Episode"> | string
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
    anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
    history?: AnimeHistoryListRelationFilter
  }

  export type EpisodeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
    anime?: AnimeOrderByWithRelationAndSearchRelevanceInput
    history?: AnimeHistoryOrderByRelationAggregateInput
    _relevance?: EpisodeOrderByRelevanceInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
    anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
    history?: AnimeHistoryListRelationFilter
  }, "id" | "url">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    time?: StringWithAggregatesFilter<"Episode"> | string
    episode?: StringWithAggregatesFilter<"Episode"> | string
    num?: IntWithAggregatesFilter<"Episode"> | number
    url?: StringWithAggregatesFilter<"Episode"> | string
    url_image?: StringWithAggregatesFilter<"Episode"> | string
    anime_id?: IntWithAggregatesFilter<"Episode"> | number
  }

  export type LatestWhereInput = {
    AND?: LatestWhereInput | LatestWhereInput[]
    OR?: LatestWhereInput[]
    NOT?: LatestWhereInput | LatestWhereInput[]
    id?: IntFilter<"Latest"> | number
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_url?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
    anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }

  export type LatestOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
    anime?: AnimeOrderByWithRelationAndSearchRelevanceInput
    _relevance?: LatestOrderByRelevanceInput
  }

  export type LatestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    anime_url?: string
    AND?: LatestWhereInput | LatestWhereInput[]
    OR?: LatestWhereInput[]
    NOT?: LatestWhereInput | LatestWhereInput[]
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
    anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }, "id" | "anime_url">

  export type LatestOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
    _count?: LatestCountOrderByAggregateInput
    _avg?: LatestAvgOrderByAggregateInput
    _max?: LatestMaxOrderByAggregateInput
    _min?: LatestMinOrderByAggregateInput
    _sum?: LatestSumOrderByAggregateInput
  }

  export type LatestScalarWhereWithAggregatesInput = {
    AND?: LatestScalarWhereWithAggregatesInput | LatestScalarWhereWithAggregatesInput[]
    OR?: LatestScalarWhereWithAggregatesInput[]
    NOT?: LatestScalarWhereWithAggregatesInput | LatestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Latest"> | number
    timestamp?: StringWithAggregatesFilter<"Latest"> | string
    episode?: StringWithAggregatesFilter<"Latest"> | string
    lang?: StringWithAggregatesFilter<"Latest"> | string
    anime_url?: StringWithAggregatesFilter<"Latest"> | string
    anime_id?: IntWithAggregatesFilter<"Latest"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    discord_id?: StringNullableFilter<"User"> | string | null
    firebase_id?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    suscribtion_type?: IntNullableFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableFilter<"User"> | Date | string | null
    history?: AnimeHistoryListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    discord_id?: SortOrderInput | SortOrder
    firebase_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrderInput | SortOrder
    suscribtion_end?: SortOrderInput | SortOrder
    history?: AnimeHistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    discord_id?: string
    firebase_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    suscribtion_type?: IntNullableFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableFilter<"User"> | Date | string | null
    history?: AnimeHistoryListRelationFilter
  }, "id" | "email" | "username" | "discord_id" | "firebase_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    discord_id?: SortOrderInput | SortOrder
    firebase_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrderInput | SortOrder
    suscribtion_end?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    discord_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    firebase_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    suscribtion_type?: IntNullableWithAggregatesFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AnimeHistoryWhereInput = {
    AND?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    OR?: AnimeHistoryWhereInput[]
    NOT?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    id?: IntFilter<"AnimeHistory"> | number
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
    episode?: XOR<EpisodeRelationFilter, EpisodeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnimeHistoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    episode?: EpisodeOrderByWithRelationAndSearchRelevanceInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
  }

  export type AnimeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    OR?: AnimeHistoryWhereInput[]
    NOT?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
    episode?: XOR<EpisodeRelationFilter, EpisodeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AnimeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    _count?: AnimeHistoryCountOrderByAggregateInput
    _avg?: AnimeHistoryAvgOrderByAggregateInput
    _max?: AnimeHistoryMaxOrderByAggregateInput
    _min?: AnimeHistoryMinOrderByAggregateInput
    _sum?: AnimeHistorySumOrderByAggregateInput
  }

  export type AnimeHistoryScalarWhereWithAggregatesInput = {
    AND?: AnimeHistoryScalarWhereWithAggregatesInput | AnimeHistoryScalarWhereWithAggregatesInput[]
    OR?: AnimeHistoryScalarWhereWithAggregatesInput[]
    NOT?: AnimeHistoryScalarWhereWithAggregatesInput | AnimeHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnimeHistory"> | number
    timestamp?: IntWithAggregatesFilter<"AnimeHistory"> | number
    duration?: IntWithAggregatesFilter<"AnimeHistory"> | number
    episode_id?: IntWithAggregatesFilter<"AnimeHistory"> | number
    user_id?: IntWithAggregatesFilter<"AnimeHistory"> | number
  }

  export type AnimeCreateInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    episodes?: EpisodeCreateNestedManyWithoutAnimeInput
    latest?: LatestCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
    latest?: LatestUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodeUpdateManyWithoutAnimeNestedInput
    latest?: LatestUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
    latest?: LatestUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateManyInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
  }

  export type AnimeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeCreateInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime: AnimeCreateNestedOneWithoutEpisodesInput
    history?: AnimeHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
    history?: AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutEpisodesNestedInput
    history?: AnimeHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
    history?: AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
  }

  export type EpisodeUpdateManyMutationInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type LatestCreateInput = {
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime: AnimeCreateNestedOneWithoutLatestInput
  }

  export type LatestUncheckedCreateInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
  }

  export type LatestUpdateInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutLatestNestedInput
  }

  export type LatestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type LatestCreateManyInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
  }

  export type LatestUpdateManyMutationInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
    history?: AnimeHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
    history?: AnimeHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: AnimeHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: AnimeHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnimeHistoryCreateInput = {
    timestamp: number
    duration: number
    episode: EpisodeCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type AnimeHistoryUncheckedCreateInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
  }

  export type AnimeHistoryUpdateInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode?: EpisodeUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryCreateManyInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
  }

  export type AnimeHistoryUpdateManyMutationInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type LatestListRelationFilter = {
    every?: LatestWhereInput
    some?: LatestWhereInput
    none?: LatestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LatestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeOrderByRelevanceInput = {
    fields: AnimeOrderByRelevanceFieldEnum | AnimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    title_english?: SortOrder
    title_romanji?: SortOrder
    title_french?: SortOrder
    others?: SortOrder
    type?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    url?: SortOrder
    genres?: SortOrder
    url_image?: SortOrder
    score?: SortOrder
    start_date_year?: SortOrder
    nb_eps?: SortOrder
    synopsis?: SortOrder
    cover_url?: SortOrder
  }

  export type AnimeAvgOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
    nb_eps?: SortOrder
  }

  export type AnimeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    title_english?: SortOrder
    title_romanji?: SortOrder
    title_french?: SortOrder
    others?: SortOrder
    type?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    score?: SortOrder
    start_date_year?: SortOrder
    nb_eps?: SortOrder
    synopsis?: SortOrder
    cover_url?: SortOrder
  }

  export type AnimeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    title_english?: SortOrder
    title_romanji?: SortOrder
    title_french?: SortOrder
    others?: SortOrder
    type?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    score?: SortOrder
    start_date_year?: SortOrder
    nb_eps?: SortOrder
    synopsis?: SortOrder
    cover_url?: SortOrder
  }

  export type AnimeSumOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
    nb_eps?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnimeRelationFilter = {
    is?: AnimeWhereInput
    isNot?: AnimeWhereInput
  }

  export type AnimeHistoryListRelationFilter = {
    every?: AnimeHistoryWhereInput
    some?: AnimeHistoryWhereInput
    none?: AnimeHistoryWhereInput
  }

  export type AnimeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelevanceInput = {
    fields: EpisodeOrderByRelevanceFieldEnum | EpisodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestOrderByRelevanceInput = {
    fields: LatestOrderByRelevanceFieldEnum | LatestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LatestCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestAvgOrderByAggregateInput = {
    id?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestSumOrderByAggregateInput = {
    id?: SortOrder
    anime_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    suscribtion_type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    suscribtion_type?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EpisodeRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnimeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistorySumOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeCreategenresInput = {
    set: string[]
  }

  export type EpisodeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type LatestCreateNestedManyWithoutAnimeInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type LatestUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimeUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type LatestUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    upsert?: LatestUpsertWithWhereUniqueWithoutAnimeInput | LatestUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    set?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    disconnect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    delete?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    update?: LatestUpdateWithWhereUniqueWithoutAnimeInput | LatestUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: LatestUpdateManyWithWhereWithoutAnimeInput | LatestUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: LatestScalarWhereInput | LatestScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type LatestUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    upsert?: LatestUpsertWithWhereUniqueWithoutAnimeInput | LatestUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    set?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    disconnect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    delete?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    update?: LatestUpdateWithWhereUniqueWithoutAnimeInput | LatestUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: LatestUpdateManyWithWhereWithoutAnimeInput | LatestUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: LatestScalarWhereInput | LatestScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput
    connect?: AnimeWhereUniqueInput
  }

  export type AnimeHistoryCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput
    upsert?: AnimeUpsertWithoutEpisodesInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutEpisodesInput, AnimeUpdateWithoutEpisodesInput>, AnimeUncheckedUpdateWithoutEpisodesInput>
  }

  export type AnimeHistoryUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput | AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput | AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutLatestInput = {
    create?: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutLatestInput
    connect?: AnimeWhereUniqueInput
  }

  export type AnimeUpdateOneRequiredWithoutLatestNestedInput = {
    create?: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutLatestInput
    upsert?: AnimeUpsertWithoutLatestInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutLatestInput, AnimeUpdateWithoutLatestInput>, AnimeUncheckedUpdateWithoutLatestInput>
  }

  export type AnimeHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AnimeHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutUserInput | AnimeHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutUserInput | AnimeHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutUserInput | AnimeHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutUserInput | AnimeHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutUserInput | AnimeHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutUserInput | AnimeHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type EpisodeCreateNestedOneWithoutHistoryInput = {
    create?: XOR<EpisodeCreateWithoutHistoryInput, EpisodeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutHistoryInput
    connect?: EpisodeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodeUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<EpisodeCreateWithoutHistoryInput, EpisodeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutHistoryInput
    upsert?: EpisodeUpsertWithoutHistoryInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutHistoryInput, EpisodeUpdateWithoutHistoryInput>, EpisodeUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EpisodeCreateWithoutAnimeInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    history?: AnimeHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutAnimeInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    history?: AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeCreateManyAnimeInputEnvelope = {
    data: EpisodeCreateManyAnimeInput | EpisodeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type LatestCreateWithoutAnimeInput = {
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type LatestUncheckedCreateWithoutAnimeInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type LatestCreateOrConnectWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    create: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput>
  }

  export type LatestCreateManyAnimeInputEnvelope = {
    data: LatestCreateManyAnimeInput | LatestCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutAnimeInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url?: StringFilter<"Episode"> | string
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
  }

  export type LatestUpsertWithWhereUniqueWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    update: XOR<LatestUpdateWithoutAnimeInput, LatestUncheckedUpdateWithoutAnimeInput>
    create: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput>
  }

  export type LatestUpdateWithWhereUniqueWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    data: XOR<LatestUpdateWithoutAnimeInput, LatestUncheckedUpdateWithoutAnimeInput>
  }

  export type LatestUpdateManyWithWhereWithoutAnimeInput = {
    where: LatestScalarWhereInput
    data: XOR<LatestUpdateManyMutationInput, LatestUncheckedUpdateManyWithoutAnimeInput>
  }

  export type LatestScalarWhereInput = {
    AND?: LatestScalarWhereInput | LatestScalarWhereInput[]
    OR?: LatestScalarWhereInput[]
    NOT?: LatestScalarWhereInput | LatestScalarWhereInput[]
    id?: IntFilter<"Latest"> | number
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_url?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
  }

  export type AnimeCreateWithoutEpisodesInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    latest?: LatestCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutEpisodesInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    latest?: LatestUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutEpisodesInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
  }

  export type AnimeHistoryCreateWithoutEpisodeInput = {
    timestamp: number
    duration: number
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type AnimeHistoryUncheckedCreateWithoutEpisodeInput = {
    id?: number
    timestamp: number
    duration: number
    user_id: number
  }

  export type AnimeHistoryCreateOrConnectWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    create: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type AnimeHistoryCreateManyEpisodeInputEnvelope = {
    data: AnimeHistoryCreateManyEpisodeInput | AnimeHistoryCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type AnimeUpsertWithoutEpisodesInput = {
    update: XOR<AnimeUpdateWithoutEpisodesInput, AnimeUncheckedUpdateWithoutEpisodesInput>
    create: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutEpisodesInput, AnimeUncheckedUpdateWithoutEpisodesInput>
  }

  export type AnimeUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    latest?: LatestUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    latest?: LatestUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    update: XOR<AnimeHistoryUpdateWithoutEpisodeInput, AnimeHistoryUncheckedUpdateWithoutEpisodeInput>
    create: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    data: XOR<AnimeHistoryUpdateWithoutEpisodeInput, AnimeHistoryUncheckedUpdateWithoutEpisodeInput>
  }

  export type AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput = {
    where: AnimeHistoryScalarWhereInput
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type AnimeHistoryScalarWhereInput = {
    AND?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
    OR?: AnimeHistoryScalarWhereInput[]
    NOT?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
    id?: IntFilter<"AnimeHistory"> | number
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
  }

  export type AnimeCreateWithoutLatestInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    episodes?: EpisodeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutLatestInput = {
    id: number
    title: string
    title_english?: string | null
    title_romanji?: string | null
    title_french?: string | null
    others?: string | null
    type: string
    status: string
    popularity: number
    url: string
    genres?: AnimeCreategenresInput | string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps?: number | null
    synopsis?: string | null
    cover_url?: string | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutLatestInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
  }

  export type AnimeUpsertWithoutLatestInput = {
    update: XOR<AnimeUpdateWithoutLatestInput, AnimeUncheckedUpdateWithoutLatestInput>
    create: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutLatestInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutLatestInput, AnimeUncheckedUpdateWithoutLatestInput>
  }

  export type AnimeUpdateWithoutLatestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutLatestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_english?: NullableStringFieldUpdateOperationsInput | string | null
    title_romanji?: NullableStringFieldUpdateOperationsInput | string | null
    title_french?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    genres?: AnimeUpdategenresInput | string[]
    url_image?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    start_date_year?: StringFieldUpdateOperationsInput | string
    nb_eps?: NullableIntFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeHistoryCreateWithoutUserInput = {
    timestamp: number
    duration: number
    episode: EpisodeCreateNestedOneWithoutHistoryInput
  }

  export type AnimeHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
  }

  export type AnimeHistoryCreateOrConnectWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    create: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput>
  }

  export type AnimeHistoryCreateManyUserInputEnvelope = {
    data: AnimeHistoryCreateManyUserInput | AnimeHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    update: XOR<AnimeHistoryUpdateWithoutUserInput, AnimeHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput>
  }

  export type AnimeHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    data: XOR<AnimeHistoryUpdateWithoutUserInput, AnimeHistoryUncheckedUpdateWithoutUserInput>
  }

  export type AnimeHistoryUpdateManyWithWhereWithoutUserInput = {
    where: AnimeHistoryScalarWhereInput
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type EpisodeCreateWithoutHistoryInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime: AnimeCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutHistoryInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
  }

  export type EpisodeCreateOrConnectWithoutHistoryInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutHistoryInput, EpisodeUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type EpisodeUpsertWithoutHistoryInput = {
    update: XOR<EpisodeUpdateWithoutHistoryInput, EpisodeUncheckedUpdateWithoutHistoryInput>
    create: XOR<EpisodeCreateWithoutHistoryInput, EpisodeUncheckedCreateWithoutHistoryInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutHistoryInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutHistoryInput, EpisodeUncheckedUpdateWithoutHistoryInput>
  }

  export type EpisodeUpdateWithoutHistoryInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EpisodeCreateManyAnimeInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
  }

  export type LatestCreateManyAnimeInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type EpisodeUpdateWithoutAnimeInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    history?: AnimeHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    history?: AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUpdateWithoutAnimeInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeHistoryCreateManyEpisodeInput = {
    id?: number
    timestamp: number
    duration: number
    user_id: number
  }

  export type AnimeHistoryUpdateWithoutEpisodeInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryCreateManyUserInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
  }

  export type AnimeHistoryUpdateWithoutUserInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode?: EpisodeUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AnimeCountOutputTypeDefaultArgs instead
     */
    export type AnimeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeCountOutputTypeDefaultArgs instead
     */
    export type EpisodeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimeDefaultArgs instead
     */
    export type AnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeDefaultArgs instead
     */
    export type EpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LatestDefaultArgs instead
     */
    export type LatestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LatestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimeHistoryDefaultArgs instead
     */
    export type AnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}