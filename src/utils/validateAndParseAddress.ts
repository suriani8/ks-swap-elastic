import { ChainId, validateAndParseAddress as validateAndParseAddressCore } from '@kadafial/ks-sdk-core-kadafi'

export const validateAndParseAddress = (address: string) => validateAndParseAddressCore(address, ChainId.MAINNET)
