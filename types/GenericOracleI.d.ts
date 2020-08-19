/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GenericOracleIInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
    "getEthUsdPrice()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthUsdPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthUsdPrice",
    data: BytesLike
  ): Result;

  events: {
    "AssetPriceUpdated(address,uint256,uint256)": EventFragment;
    "EthPriceUpdated(uint256,uint256)": EventFragment;
    "ProphecySubmitted(address,address,uint96,uint96)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EthPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProphecySubmitted"): EventFragment;
}

export class GenericOracleI extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GenericOracleIInterface;

  functions: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getEthUsdPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getEthUsdPrice()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AssetPriceUpdated(_asset: null, _price: null, timestamp: null): EventFilter;

    EthPriceUpdated(_price: null, timestamp: null): EventFilter;

    ProphecySubmitted(
      _sybil: string | null,
      _asset: string | null,
      _sybilProphecy: null,
      _oracleProphecy: null
    ): EventFilter;
  };

  estimateGas: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getEthUsdPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}