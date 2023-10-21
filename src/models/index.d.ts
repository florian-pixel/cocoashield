import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPlantation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plantation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lib?: string | null;
  readonly images?: (Image | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlantation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plantation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lib?: string | null;
  readonly images: AsyncCollection<Image>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Plantation = LazyLoading extends LazyLoadingDisabled ? EagerPlantation : LazyPlantation

export declare const Plantation: (new (init: ModelInit<Plantation>) => Plantation) & {
  copyOf(source: Plantation, mutator: (draft: MutableModel<Plantation>) => MutableModel<Plantation> | void): Plantation;
}

type EagerImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly scannedAt?: string | null;
  readonly isScanned?: boolean | null;
  readonly isSafe?: boolean | null;
  readonly imagePath?: string | null;
  readonly createdAt?: string | null;
  readonly coordinates?: string | null;
  readonly plantationId: string;
  readonly updatedAt?: string | null;
}

type LazyImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly scannedAt?: string | null;
  readonly isScanned?: boolean | null;
  readonly isSafe?: boolean | null;
  readonly imagePath?: string | null;
  readonly createdAt?: string | null;
  readonly coordinates?: string | null;
  readonly plantationId: string;
  readonly updatedAt?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image) & {
  copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}