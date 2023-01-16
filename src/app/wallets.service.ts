import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { promise } from "protractor";
import { HomePageRoutingModule } from "./home/home-routing.module";
import { LoaderService } from "./loader.service";
import { NotiService } from "./noti.service";
import { StorageService } from "./storage.service";
import { Capacitor } from '@capacitor/core';
import { PopupService } from './popup.service';
import { RouterService } from "./router.service";


@Injectable({
  providedIn: "root",
})
export class WalletsService {
  getraw() {
    const blockchains: any[] = [
    
      {
        name: "Ethereum",
        img: "../../assets/images/tokens/ethereum.png",
        website: "https://ethereum.org/",
        description:
          "Open source platform to write and distribute decentralized applications.",
        explorer: "https://etherscan.io/",
        research: "https://research.binance.com/en/projects/ethereum",
        symbol: "ETH",
        type: "coin",
        decimals: 18,
        status: "active",
        tag: "default",
        links: [
          {
            name: "github",
            url: "https://github.com/ethereum",
          },
          {
            name: "twitter",
            url: "https://twitter.com/ethereum",
          },
          {
            name: "reddit",
            url: "https://reddit.com/r/ethereum",
          },
          {
            name: "whitepaper",
            url: "https://github.com/ethereum/wiki/wiki/White-Paper",
          },
        ],
        tokens: [
          {
            chainId: 1,
            asset: "c60_t0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            type: "ERC20",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            name: "WETH",
            symbol: "WETH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
          },
          {
            chainId: 1,
            asset: "c60_t0x0000000000085d4780B73119b644AE5ecd22b376",
            type: "ERC20",
            address: "0x0000000000085d4780B73119b644AE5ecd22b376",
            name: "TrueUSD",
            symbol: "TUSD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0000000000095413afC295d19EDeb1Ad7B71c952",
            type: "ERC20",
            address: "0x0000000000095413afC295d19EDeb1Ad7B71c952",
            name: "Tokenlon",
            symbol: "LON",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000095413afC295d19EDeb1Ad7B71c952/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
            type: "ERC20",
            address: "0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
            name: "AllianceBlock",
            symbol: "ALBT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            type: "ERC20",
            address: "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            name: "SKALE Network",
            symbol: "SKL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
            type: "ERC20",
            address: "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
            name: "UniLend",
            symbol: "UFT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            type: "ERC20",
            address: "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            name: "Orion Protocol",
            symbol: "ORN",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            type: "ERC20",
            address: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            name: "Rai Reflex Index",
            symbol: "RAI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
            type: "ERC20",
            address: "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
            name: "SparkPoint",
            symbol: "SRK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0488401c3F535193Fa8Df029d9fFe615A06E74E6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            type: "ERC20",
            address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            name: "UMA",
            symbol: "UMA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
            type: "ERC20",
            address: "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
            name: "SmartKey",
            symbol: "Skey",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x06A01a4d579479Dd5D884EBf61A31727A3d8D442/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
            type: "ERC20",
            address: "0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
            name: "Base Protocol",
            symbol: "BASE",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x07150e919B4De5fD6a63DE1F9384828396f25fDC/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
            type: "ERC20",
            address: "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
            name: "Mirror Protocol",
            symbol: "MIR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09a3EcAFa817268f77BE1283176B946C4ff2E608/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
            type: "ERC20",
            address: "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
            name: "Growth DeFi",
            symbol: "GRO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
            type: "ERC20",
            address: "0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
            name: "LGO Token",
            symbol: "LGO",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x0Ae055097C6d159879521C384F1D2123D1f195e6",
            type: "ERC20",
            address: "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
            name: "xDai",
            symbol: "STAKE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            type: "ERC20",
            address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            name: "yearn.finance",
            symbol: "YFI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
            type: "ERC20",
            address: "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
            name: "Bifrost",
            symbol: "BFC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
            type: "ERC20",
            address: "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
            name: "Public Mint",
            symbol: "MINT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0CDF9acd87E940837ff21BB40c9fd55F68bba059/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
            type: "ERC20",
            address: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
            name: "PoolTogether",
            symbol: "POOL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            type: "ERC20",
            address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            name: "Basic Attention Token",
            symbol: "BAT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
            type: "ERC20",
            address: "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
            name: "DAO Maker",
            symbol: "DAO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f51bb10119727a7e5eA3538074fb341F56B09Ad/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            type: "ERC20",
            address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            name: "Decentraland",
            symbol: "MANA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
            type: "ERC20",
            address: "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
            name: "Blockzero Labs",
            symbol: "XIO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
            type: "ERC20",
            address: "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
            name: "Pundi X",
            symbol: "PUNDIX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
            type: "ERC20",
            address: "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
            name: "Unilayer",
            symbol: "LAYER",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0fF6ffcFDa92c53F615a4A75D982f399C989366b/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
            type: "ERC20",
            address: "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
            name: "UniMex Network",
            symbol: "UMX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x111111111117dC0aa78b770fA6A738034120C302",
            type: "ERC20",
            address: "0x111111111117dC0aa78b770fA6A738034120C302",
            name: "1INCH Token",
            symbol: "1INCH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x111111111117dC0aa78b770fA6A738034120C302/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
            type: "ERC20",
            address: "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
            name: "ARMOR",
            symbol: "ARMOR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
            type: "ERC20",
            address: "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
            name: "Armor NXM",
            symbol: "arNXM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF18C680aF1f9f45cBcab6309562975b1dD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
            type: "ERC20",
            address: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
            name: "DeFi Pulse Index",
            symbol: "DPI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
            type: "ERC20",
            address: "0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
            name: "DeltaHub Community",
            symbol: "DHC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x15874d65e649880c2614e7a480cb7c9A55787FF6",
            type: "ERC20",
            address: "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
            name: "EthereumMax",
            symbol: "eMax",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x15874d65e649880c2614e7a480cb7c9A55787FF6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
            type: "ERC20",
            address: "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
            name: "PAID Network",
            symbol: "PAID",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
            type: "ERC20",
            address: "0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
            name: "KIRA Network",
            symbol: "KEX",
            decimals: 6,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
            type: "ERC20",
            address: "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
            name: "Polychain Monsters",
            symbol: "PMON",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1796ae0b0fa4862485106a0de9b654eFE301D0b2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
            type: "ERC20",
            address: "0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
            name: "Cryptocurrency Top 10 Tokens Index",
            symbol: "CC10",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            type: "ERC20",
            address: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            name: "Audius",
            symbol: "AUDIO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x1985365e9f78359a9B6AD760e32412f4a445E862",
            type: "ERC20",
            address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
            name: "Augur",
            symbol: "REP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
            type: "ERC20",
            address: "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
            name: "Vesper",
            symbol: "VSP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
            type: "ERC20",
            address: "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
            name: "Antimatter.Finance Governance Token",
            symbol: "MATTER",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
            type: "ERC20",
            address: "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
            name: "TOWER",
            symbol: "TOWER",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9922314ED1415c95b9FD453c3818fd41867d0B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
            type: "ERC20",
            address: "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
            name: "Non-Fungible Yearn",
            symbol: "NFY",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
            type: "ERC20",
            address: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
            name: "Keep3rV1",
            symbol: "KP3R",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
            type: "ERC20",
            address: "0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
            name: "Lead Wallet",
            symbol: "LEAD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            type: "ERC20",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            name: "Uniswap",
            symbol: "UNI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
            type: "ERC20",
            address: "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
            name: "ChainGuardians Governance Token",
            symbol: "CGG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
            type: "ERC20",
            address: "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
            name: "OVR",
            symbol: "OVR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x221657776846890989a759BA2973e427DfF5C9bB",
            type: "ERC20",
            address: "0x221657776846890989a759BA2973e427DfF5C9bB",
            name: "Reputation",
            symbol: "REPv2",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            type: "ERC20",
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            name: "Wrapped Bitcoin",
            symbol: "WBTC",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
            type: "ERC20",
            address: "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
            name: "UNION Protocol Governance Token",
            symbol: "UNN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x226f7b842E0F0120b7E194D05432b3fd14773a9D/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
            type: "ERC20",
            address: "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
            name: "Unisocks Edition 0",
            symbol: "SOCKS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x23B608675a2B2fB1890d3ABBd85c5775c51691d5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
            type: "ERC20",
            address: "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
            name: "Bidao",
            symbol: "BID",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
            type: "ERC20",
            address: "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
            name: "Cellframe",
            symbol: "CELL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x26E43759551333e57F073bb0772F50329A957b30",
            type: "ERC20",
            address: "0x26E43759551333e57F073bb0772F50329A957b30",
            name: "DegenVC",
            symbol: "DGVC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26E43759551333e57F073bb0772F50329A957b30/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x27C70Cd1946795B66be9d954418546998b546634",
            type: "ERC20",
            address: "0x27C70Cd1946795B66be9d954418546998b546634",
            name: "DOGE KILLER",
            symbol: "LEASH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x27C70Cd1946795B66be9d954418546998b546634/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
            type: "ERC20",
            address: "0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
            name: "Froge Finance",
            symbol: "FROGE",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x29502fE4d233EF0b45C3647101Fa1252cE0634BD/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
            type: "ERC20",
            address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
            name: "HEX",
            symbol: "HEX",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x2ba592F78dB6436527729929AAf6c908497cB200",
            type: "ERC20",
            address: "0x2ba592F78dB6436527729929AAf6c908497cB200",
            name: "Cream Finance",
            symbol: "CREAM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
            type: "ERC20",
            address: "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
            name: "Mettalex",
            symbol: "MTLX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
            type: "ERC20",
            address: "0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
            name: "Yfi.mobi",
            symbol: "YFIM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
            type: "ERC20",
            address: "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
            name: "ZeroSwap",
            symbol: "ZEE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
            type: "ERC20",
            address: "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
            name: "Decentr",
            symbol: "DEC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3155BA85D5F96b2d030a4966AF206230e46849cb",
            type: "ERC20",
            address: "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
            name: "THORChain ETH.RUNE",
            symbol: "RUNE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3155BA85D5F96b2d030a4966AF206230e46849cb/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
            type: "ERC20",
            address: "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
            name: "Akita Inu",
            symbol: "AKITA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
            type: "ERC20",
            address: "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
            name: "Anatha",
            symbol: "wANATHA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
            type: "ERC20",
            address: "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
            name: "RAMP DEFI",
            symbol: "RAMP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
            type: "ERC20",
            address: "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
            name: "MANTRA DAO",
            symbol: "OM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3593D125a4f7849a1B059E64F4517A86Dd60c95d/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
            type: "ERC20",
            address: "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
            name: "PARSIQ",
            symbol: "PRQ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x362bc847A3a9637d3af6624EeC853618a43ed7D2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            type: "ERC20",
            address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            name: "The Sandbox",
            symbol: "SAND",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3845badAde8e6dFF049820680d1F14bD3903a5d0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x389999216860AB8E0175387A0c90E5c52522C945",
            type: "ERC20",
            address: "0x389999216860AB8E0175387A0c90E5c52522C945",
            name: "FEG Token",
            symbol: "FEGeth",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x389999216860AB8E0175387A0c90E5c52522C945/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
            type: "ERC20",
            address: "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
            name: "Concentrated Voting Power",
            symbol: "CVP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
            type: "ERC20",
            address: "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
            name: "DSLA",
            symbol: "DSLA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
            type: "ERC20",
            address: "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
            name: "Vidya",
            symbol: "VIDYA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x408e41876cCCDC0F92210600ef50372656052a38",
            type: "ERC20",
            address: "0x408e41876cCCDC0F92210600ef50372656052a38",
            name: "Ren",
            symbol: "REN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
            type: "ERC20",
            address: "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
            name: "SORA",
            symbol: "XOR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x40FD72257597aA14C7231A7B1aaa29Fce868F677/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
            type: "ERC20",
            address: "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
            name: "FunFair",
            symbol: "FUN",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x41A3Dba3D677E573636BA691a70ff2D606c29666",
            type: "ERC20",
            address: "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
            name: "GoBlank",
            symbol: "BLANK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x41A3Dba3D677E573636BA691a70ff2D606c29666/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
            type: "ERC20",
            address: "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
            name: "Pickle Finance",
            symbol: "PICKLE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
            type: "ERC20",
            address: "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
            name: "dForce",
            symbol: "DF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
            type: "ERC20",
            address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
            name: "FLOKI",
            symbol: "FLOKI",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
            type: "ERC20",
            address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
            name: "Orchid",
            symbol: "OXT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x45804880De22913dAFE09f4980848ECE6EcbAf78",
            type: "ERC20",
            address: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
            name: "PAX Gold",
            symbol: "PAXG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x45804880De22913dAFE09f4980848ECE6EcbAf78/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            type: "ERC20",
            address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            name: "WOO Network",
            symbol: "WOO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4691937a7508860F876c9c0a2a617E7d9E945D4B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4a220E6096B25EADb88358cb44068A3248254675",
            type: "ERC20",
            address: "0x4a220E6096B25EADb88358cb44068A3248254675",
            name: "Quant",
            symbol: "QNT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4a220E6096B25EADb88358cb44068A3248254675/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
            type: "ERC20",
            address: "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
            name: "Jupiter",
            symbol: "JUP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4c11249814f11b9346808179Cf06e71ac328c1b5",
            type: "ERC20",
            address: "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
            name: "Oraichain Token",
            symbol: "ORAI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4c11249814f11b9346808179Cf06e71ac328c1b5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            type: "ERC20",
            address: "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            name: "TrueFi",
            symbol: "TRU",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
            type: "ERC20",
            address: "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
            name: "MCDEX Token",
            symbol: "MCB",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
            type: "ERC20",
            address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
            name: "NuCypher",
            symbol: "NU",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4fE83213D56308330EC302a8BD641f1d0113A4Cc/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
            type: "ERC20",
            address: "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
            name: "Razor Network",
            symbol: "RAZOR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x514910771AF9Ca656af840dff83E8264EcF986CA",
            type: "ERC20",
            address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            name: "Chainlink",
            symbol: "LINK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
            type: "ERC20",
            address: "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
            name: "unFederalReserve",
            symbol: "eRSDL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
            type: "ERC20",
            address: "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
            name: "pTokens BTC",
            symbol: "pBTC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5228a22e72ccC52d415EcFd199F99D0665E7733b/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
            type: "ERC20",
            address: "0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
            name: "BarterTrade",
            symbol: "BART",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
            type: "ERC20",
            address: "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
            name: "REVV",
            symbol: "REVV",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x557B933a7C2c45672B610F8954A3deB39a51A8Ca/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
            type: "ERC20",
            address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
            name: "sUSD",
            symbol: "sUSD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x584bC13c7D411c00c01A62e8019472dE68768430",
            type: "ERC20",
            address: "0x584bC13c7D411c00c01A62e8019472dE68768430",
            name: "Hegic",
            symbol: "HEGIC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x584bC13c7D411c00c01A62e8019472dE68768430/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
            type: "ERC20",
            address: "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
            name: "UnMarshal",
            symbol: "MARSH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
            type: "ERC20",
            address: "0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
            name: "Xfinance",
            symbol: "XFI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5BEfBB272290dD5b8521D4a938f6c4757742c430/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
            type: "ERC20",
            address: "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
            name: "Dev",
            symbol: "DEV",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
            type: "ERC20",
            address: "0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
            name: "BOND",
            symbol: "BOND",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5Dc02Ea99285E17656b8350722694c35154DB1E8/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
            type: "ERC20",
            address: "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
            name: "DEXTF Token",
            symbol: "DEXTF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            type: "ERC20",
            address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            name: "Liquity USD",
            symbol: "LUSD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x607F4C5BB672230e8672085532f7e901544a7375",
            type: "ERC20",
            address: "0x607F4C5BB672230e8672085532f7e901544a7375",
            name: "iExec RLC",
            symbol: "RLC",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x607F4C5BB672230e8672085532f7e901544a7375/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
            type: "ERC20",
            address: "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
            name: "Launchpool",
            symbol: "LPOOL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
            type: "ERC20",
            address: "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
            name: "cVault.finance",
            symbol: "CORE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6243d8CEA23066d098a15582d81a598b4e8391F4",
            type: "ERC20",
            address: "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
            name: "Reflexer Ungovernance Token",
            symbol: "FLX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6243d8CEA23066d098a15582d81a598b4e8391F4/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x626E8036dEB333b408Be468F951bdB42433cBF18",
            type: "ERC20",
            address: "0x626E8036dEB333b408Be468F951bdB42433cBF18",
            name: "AIOZ Network",
            symbol: "AIOZ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x626E8036dEB333b408Be468F951bdB42433cBF18/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
            type: "ERC20",
            address: "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
            name: "CyberFi Token",
            symbol: "CFi",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
            type: "ERC20",
            address: "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
            name: "Wise Token",
            symbol: "WISE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
            type: "ERC20",
            address: "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
            name: "Kylin",
            symbol: "KYL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x67c597624B17b16fb77959217360B7cD18284253",
            type: "ERC20",
            address: "0x67c597624B17b16fb77959217360B7cD18284253",
            name: "Benchmark Protocol",
            symbol: "MARK",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67c597624B17b16fb77959217360B7cD18284253/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6810e776880C02933D47DB1b9fc05908e5386b96",
            type: "ERC20",
            address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
            name: "Gnosis",
            symbol: "GNO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
            type: "ERC20",
            address: "0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
            name: "chads.vc",
            symbol: "CHADS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69692D3345010a207b759a7D1af6fc7F38b35c5E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
            type: "ERC20",
            address: "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
            name: "Poolz Finance",
            symbol: "POOLZ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            type: "ERC20",
            address: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            name: "Mask Network",
            symbol: "MASK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F",
            type: "ERC20",
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            name: "Dai",
            symbol: "DAI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            type: "ERC20",
            address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            name: "SushiSwap",
            symbol: "SUSHI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
            type: "ERC20",
            address: "0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
            name: "Fyooz",
            symbol: "FYZ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6BFf2fE249601ed0Db3a87424a2E923118BB0312/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
            type: "ERC20",
            address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
            name: "Holo",
            symbol: "HOT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6c6EE5e31d828De241282B9606C8e98Ea48526E2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
            type: "ERC20",
            address: "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
            name: "QuiverX",
            symbol: "QRX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
            type: "ERC20",
            address: "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
            name: "UniTrade",
            symbol: "TRADE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
            type: "ERC20",
            address: "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
            name: "Umbrella Network",
            symbol: "UMB",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
            type: "ERC20",
            address: "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
            name: "Bird.Money",
            symbol: "BIRD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x71F85B2E46976bD21302B64329868fd15eb0D127",
            type: "ERC20",
            address: "0x71F85B2E46976bD21302B64329868fd15eb0D127",
            name: "Axion",
            symbol: "AXN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x71F85B2E46976bD21302B64329868fd15eb0D127/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
            type: "ERC20",
            address: "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
            name: "Bridge Mutual",
            symbol: "BMI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x725C263e32c72dDC3A19bEa12C5a0479a81eE688/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
            type: "ERC20",
            address: "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
            name: "Paypolitan Token",
            symbol: "EPAN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
            type: "ERC20",
            address: "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
            name: "Metaverse Index",
            symbol: "MVI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e364F2ABdC788b7E918bc238B21f109Cd634D7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
            type: "ERC20",
            address: "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
            name: "SmartCredit Token",
            symbol: "SMARTCREDIT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
            type: "ERC20",
            address: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
            name: "Dogelon",
            symbol: "ELON",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7659CE147D0e714454073a5dd7003544234b6Aa0",
            type: "ERC20",
            address: "0x7659CE147D0e714454073a5dd7003544234b6Aa0",
            name: "XCAD Network",
            symbol: "XCAD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7659CE147D0e714454073a5dd7003544234b6Aa0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7671904eed7f10808B664fc30BB8693FD7237abF",
            type: "ERC20",
            address: "0x7671904eed7f10808B664fc30BB8693FD7237abF",
            name: "Boolberry",
            symbol: "BBR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7671904eed7f10808B664fc30BB8693FD7237abF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
            type: "ERC20",
            address: "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
            name: "Tornado Cash",
            symbol: "TORN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x77777FeDdddFfC19Ff86DB637967013e6C6A116C/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
            type: "ERC20",
            address: "0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
            name: "WAXE",
            symbol: "WAXE",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
            type: "ERC20",
            address: "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
            name: "DFOhub",
            symbol: "buidl",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7b123f53421b1bF8533339BFBdc7C98aA94163db/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            type: "ERC20",
            address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            name: "Polygon",
            symbol: "MATIC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
            type: "ERC20",
            address: "0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
            name: "Robonomics",
            symbol: "XRT",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
            type: "ERC20",
            address: "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
            name: "xToken",
            symbol: "XTK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            type: "ERC20",
            address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            name: "Aave",
            symbol: "AAVE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x7FF4169a6B5122b664c51c95727d87750eC07c84",
            type: "ERC20",
            address: "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
            name: "Tenset",
            symbol: "10SET",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7FF4169a6B5122b664c51c95727d87750eC07c84/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            type: "ERC20",
            address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            name: "Origin Protocol",
            symbol: "OGN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            type: "ERC20",
            address: "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            name: "Polkastarter",
            symbol: "POLS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
            type: "ERC20",
            address: "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
            name: "Unibright",
            symbol: "UBT",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            type: "ERC20",
            address: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            name: "DIA",
            symbol: "DIA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x853d955aCEf822Db058eb8505911ED77F175b99e",
            type: "ERC20",
            address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
            name: "Frax",
            symbol: "FRAX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
            type: "ERC20",
            address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
            name: "KEEP Token",
            symbol: "KEEP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8888801aF4d980682e47f1A9036e589479e835C5",
            type: "ERC20",
            address: "0x8888801aF4d980682e47f1A9036e589479e835C5",
            name: "88mph.app",
            symbol: "MPH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8888801aF4d980682e47f1A9036e589479e835C5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
            type: "ERC20",
            address: "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
            name: "Alchemist",
            symbol: "⚗️",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x88EF27e69108B2633F8E1C184CC37940A075cC02",
            type: "ERC20",
            address: "0x88EF27e69108B2633F8E1C184CC37940A075cC02",
            name: "Dego Finance",
            symbol: "DEGO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88EF27e69108B2633F8E1C184CC37940A075cC02/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
            type: "ERC20",
            address: "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
            name: "pNetwork",
            symbol: "PNT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8a40c222996f9F3431f63Bf80244C36822060f12",
            type: "ERC20",
            address: "0x8a40c222996f9F3431f63Bf80244C36822060f12",
            name: "Finxflo",
            symbol: "FXF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a40c222996f9F3431f63Bf80244C36822060f12/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8a854288a5976036A725879164Ca3e91d30c6A1B",
            type: "ERC20",
            address: "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
            name: "GET",
            symbol: "GET",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a854288a5976036A725879164Ca3e91d30c6A1B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F",
            type: "ERC20",
            address: "0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F",
            name: "Saitama Inu",
            symbol: "SAITAMA",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
            type: "ERC20",
            address: "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
            name: "PolkaFoundry",
            symbol: "PKF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8B39B70E39Aa811b69365398e0aACe9bee238AEb/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
            type: "ERC20",
            address: "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
            name: "Function X",
            symbol: "FX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
            type: "ERC20",
            address: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
            name: "Swipe",
            symbol: "SXP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
            type: "ERC20",
            address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
            name: "tBTC",
            symbol: "TBTC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8eB24319393716668D768dCEC29356ae9CfFe285",
            type: "ERC20",
            address: "0x8eB24319393716668D768dCEC29356ae9CfFe285",
            name: "SingularityNET Token",
            symbol: "AGI",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8eB24319393716668D768dCEC29356ae9CfFe285/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            type: "ERC20",
            address: "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            name: "Request Token",
            symbol: "REQ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8f8221aFbB33998d8584A2B05749bA73c37a938a/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9355372396e3F6daF13359B7b607a3374cc638e0",
            type: "ERC20",
            address: "0x9355372396e3F6daF13359B7b607a3374cc638e0",
            name: "WHALE",
            symbol: "WHALE",
            decimals: 4,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9355372396e3F6daF13359B7b607a3374cc638e0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
            type: "ERC20",
            address: "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
            name: "Pinakion",
            symbol: "PNK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
            type: "ERC20",
            address: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
            name: "Evolution Land Global Token",
            symbol: "RING",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9469D013805bFfB7D3DEBe5E7839237e535ec483/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x954b890704693af242613edEf1B603825afcD708",
            type: "ERC20",
            address: "0x954b890704693af242613edEf1B603825afcD708",
            name: "Cardstack",
            symbol: "CARD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x954b890704693af242613edEf1B603825afcD708/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
            type: "ERC20",
            address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
            name: "Fei USD",
            symbol: "FEI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x95a4492F028aa1fd432Ea71146b433E7B4446611",
            type: "ERC20",
            address: "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
            name: "APY.Finance",
            symbol: "APY",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95a4492F028aa1fd432Ea71146b433E7B4446611/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            type: "ERC20",
            address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            name: "SHIBA INU",
            symbol: "SHIB",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
            type: "ERC20",
            address: "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
            name: "DeFi Yield Protocol",
            symbol: "DYP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            type: "ERC20",
            address: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            name: "Ocean Protocol",
            symbol: "OCEAN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x990f341946A3fdB507aE7e52d17851B87168017c",
            type: "ERC20",
            address: "0x990f341946A3fdB507aE7e52d17851B87168017c",
            name: "Strong",
            symbol: "STRONG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x990f341946A3fdB507aE7e52d17851B87168017c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
            type: "ERC20",
            address: "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
            name: "Shopping.io",
            symbol: "SPI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
            type: "ERC20",
            address: "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
            name: "Binance Wrapped BTC",
            symbol: "BBTC",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
            type: "ERC20",
            address: "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
            name: "Doki Doki Finance",
            symbol: "DOKI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9EA3b5b4EC044b70375236A281986106457b20EF",
            type: "ERC20",
            address: "0x9EA3b5b4EC044b70375236A281986106457b20EF",
            name: "Delta Financial",
            symbol: "DELTA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9EA3b5b4EC044b70375236A281986106457b20EF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
            type: "ERC20",
            address: "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
            name: "Unistake",
            symbol: "UNISTAKE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
            type: "ERC20",
            address: "0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
            name: "Tadpole",
            symbol: "TAD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f7229aF0c4b9740e207Ea283b9094983f78ba04/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            type: "ERC20",
            address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            name: "Maker",
            symbol: "MKR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
            type: "ERC20",
            address: "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
            name: "GraphLinq",
            symbol: "GLQ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa0246c9032bC3A600820415aE600c6388619A14D",
            type: "ERC20",
            address: "0xa0246c9032bC3A600820415aE600c6388619A14D",
            name: "Harvest Finance",
            symbol: "FARM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0246c9032bC3A600820415aE600c6388619A14D/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
            type: "ERC20",
            address: "0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
            name: "Wrapped CrescoFin",
            symbol: "wCRES",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0afAA285Ce85974c3C881256cB7F225e3A1178a/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            type: "ERC20",
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            name: "USD Coin",
            symbol: "USDC",
            decimals: 6,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
            pairs: [],
            tag: "default",
          },
          {
            asset: "c60_t0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
            type: "ERC20",
            address: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
            name: "Aragon",
            symbol: "ANT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa117000000f279D81A1D3cc75430fAA017FA5A2e/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
            type: "ERC20",
            address: "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
            name: "RFOX",
            symbol: "RFOX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa1d6Df714F91DeBF4e0802A542E13067f31b8262/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa393473d64d2F9F026B60b6Df7859A689715d092",
            type: "ERC20",
            address: "0xa393473d64d2F9F026B60b6Df7859A689715d092",
            name: "Lattice Token",
            symbol: "LTX",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa393473d64d2F9F026B60b6Df7859A689715d092/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
            type: "ERC20",
            address: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
            name: "Meta",
            symbol: "MTA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
            type: "ERC20",
            address: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
            name: "Rubic",
            symbol: "RBC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xA8b919680258d369114910511cc87595aec0be6D",
            type: "ERC20",
            address: "0xA8b919680258d369114910511cc87595aec0be6D",
            name: "LUKSO",
            symbol: "LYXe",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA8b919680258d369114910511cc87595aec0be6D/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
            type: "ERC20",
            address: "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
            name: "Syntropy",
            symbol: "NOIA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
            type: "ERC20",
            address: "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
            name: "Bella Protocol",
            symbol: "BEL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
            type: "ERC20",
            address: "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
            name: "ETH 2x Flexible Leverage Index",
            symbol: "ETH2x-FLI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            type: "ERC20",
            address: "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            name: "Trace Token",
            symbol: "TRAC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
            type: "ERC20",
            address: "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
            name: "Celsius",
            symbol: "CEL",
            decimals: 4,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
            type: "ERC20",
            address: "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
            name: "Monolith TKN",
            symbol: "TKN",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
            type: "ERC20",
            address: "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
            name: "Crowns",
            symbol: "CWS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
            type: "ERC20",
            address: "0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
            name: "OptionRoom Token",
            symbol: "ROOM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
            type: "ERC20",
            address: "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
            name: "UniCrypt",
            symbol: "UNCX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
            type: "ERC20",
            address: "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
            name: "Ambire AdEx",
            symbol: "ADX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xADE00C28244d5CE17D72E40330B1c318cD12B7c3/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xAE1eaAE3F627AAca434127644371b67B18444051",
            type: "ERC20",
            address: "0xAE1eaAE3F627AAca434127644371b67B18444051",
            name: "YOP",
            symbol: "YOP",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAE1eaAE3F627AAca434127644371b67B18444051/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
            type: "ERC20",
            address: "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
            name: "LGCY Network",
            symbol: "LGCY",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
            type: "ERC20",
            address: "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
            name: "Rio Fuel Token",
            symbol: "RFuel",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
            type: "ERC20",
            address: "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
            name: "Zenfuse",
            symbol: "ZEFU",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB26631c6dda06aD89B93C71400D25692de89c068",
            type: "ERC20",
            address: "0xB26631c6dda06aD89B93C71400D25692de89c068",
            name: "Minds",
            symbol: "MINDS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB26631c6dda06aD89B93C71400D25692de89c068/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB4d930279552397bbA2ee473229f89Ec245bc365",
            type: "ERC20",
            address: "0xB4d930279552397bbA2ee473229f89Ec245bc365",
            name: "MahaDAO",
            symbol: "MAHA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB4d930279552397bbA2ee473229f89Ec245bc365/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
            type: "ERC20",
            address: "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
            name: "Nexo",
            symbol: "NEXO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
            type: "ERC20",
            address: "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
            name: "SYNC",
            symbol: "SYNC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xb753428af26E81097e7fD17f40c88aaA3E04902c",
            type: "ERC20",
            address: "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
            name: "saffron.finance",
            symbol: "SFI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb753428af26E81097e7fD17f40c88aaA3E04902c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
            type: "ERC20",
            address: "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
            name: "Stabilize Token",
            symbol: "STBZ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB987D48Ed8f2C468D52D6405624EADBa5e76d723/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
            type: "ERC20",
            address: "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
            name: "K21",
            symbol: "K21",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
            type: "ERC20",
            address: "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
            name: "0chain",
            symbol: "ZCN",
            decimals: 10,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb9EF770B6A5e12E45983C5D80545258aA38F3B78/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xba100000625a3754423978a60c9317c58a424e3D",
            type: "ERC20",
            address: "0xba100000625a3754423978a60c9317c58a424e3D",
            name: "Balancer",
            symbol: "BAL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            type: "ERC20",
            address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            name: "Band Protocol",
            symbol: "BAND",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
            type: "ERC20",
            address: "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
            name: "Swapfolio",
            symbol: "SWFL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            type: "ERC20",
            address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            name: "Loopring",
            symbol: "LRC",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            type: "ERC20",
            address: "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            name: "Ethernity Chain",
            symbol: "ERN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBc2AE13b23d715c30720F079fcd9B4a74093505/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            type: "ERC20",
            address: "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            name: "Perpetual",
            symbol: "PERP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xbE9375C6a420D2eEB258962efB95551A5b722803",
            type: "ERC20",
            address: "0xbE9375C6a420D2eEB258962efB95551A5b722803",
            name: "StormX",
            symbol: "STMX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbE9375C6a420D2eEB258962efB95551A5b722803/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
            type: "ERC20",
            address: "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
            name: "GYSR",
            symbol: "GYSR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
            type: "ERC20",
            address: "0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
            name: "World Token",
            symbol: "WORLD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xc00e94Cb662C3520282E6f5717214004A7f26888",
            type: "ERC20",
            address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            name: "Compound",
            symbol: "COMP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            type: "ERC20",
            address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            name: "Synthetix",
            symbol: "SNX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
            type: "ERC20",
            address: "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
            name: "DLP Duck Token",
            symbol: "DUCK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            type: "ERC20",
            address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            name: "Ethereum Name Service",
            symbol: "ENS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
            type: "ERC20",
            address: "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
            name: "Chain Games",
            symbol: "CHAIN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC4C2614E694cF534D407Ee49F8E44D125E4681c4/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xC52C326331E9Ce41F04484d3B5E5648158028804",
            type: "ERC20",
            address: "0xC52C326331E9Ce41F04484d3B5E5648158028804",
            name: "ZEN Exchange Token",
            symbol: "ZCX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC52C326331E9Ce41F04484d3B5E5648158028804/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xC57d533c50bC22247d49a368880fb49a1caA39F7",
            type: "ERC20",
            address: "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
            name: "PowerTrade Fuel",
            symbol: "PTF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC57d533c50bC22247d49a368880fb49a1caA39F7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
            type: "ERC20",
            address: "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
            name: "Decentralized Insurance Protocol",
            symbol: "DIP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc719d010B63E5bbF2C0551872CD5316ED26AcD83/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
            type: "ERC20",
            address: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
            name: "Tribe",
            symbol: "TRIBE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
            type: "ERC20",
            address: "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
            name: "Convergence",
            symbol: "CONV",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            type: "ERC20",
            address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            name: "The Graph",
            symbol: "GRT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
            type: "ERC20",
            address: "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
            name: "Rootkit Finance",
            symbol: "ROOT",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
            type: "ERC20",
            address: "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
            name: "Kine Governance Token",
            symbol: "KINE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
            type: "ERC20",
            address: "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
            name: "TrustSwap Token",
            symbol: "SWAP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCC4304A31d09258b0029eA7FE63d032f52e44EFe/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
            type: "ERC20",
            address: "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
            name: "BEPRO Network",
            symbol: "BEPRO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
            type: "ERC20",
            address: "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
            name: "Terra Virtua Kolect",
            symbol: "TVK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
            type: "ERC20",
            address: "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
            name: "SIREN",
            symbol: "SI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            type: "ERC20",
            address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            name: "OMG Network",
            symbol: "OMG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
            type: "ERC20",
            address: "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
            name: "Terra",
            symbol: "LUNA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xd379700999F4805Ce80aa32DB46A94dF64561108",
            type: "ERC20",
            address: "0xd379700999F4805Ce80aa32DB46A94dF64561108",
            name: "Dextrust",
            symbol: "DETS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd379700999F4805Ce80aa32DB46A94dF64561108/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xD46bA6D942050d489DBd938a2C909A5d5039A161",
            type: "ERC20",
            address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
            name: "Ampleforth",
            symbol: "AMPL",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xD478161C952357F05f0292B56012Cd8457F1cfbF",
            type: "ERC20",
            address: "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
            name: "Polkamarkets",
            symbol: "POLK",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD478161C952357F05f0292B56012Cd8457F1cfbF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xD533a949740bb3306d119CC777fa900bA034cd52",
            type: "ERC20",
            address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
            name: "Curve DAO Token",
            symbol: "CRV",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xD5525D397898e5502075Ea5E830d8914f6F0affe",
            type: "ERC20",
            address: "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
            name: "MEME",
            symbol: "MEME",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD5525D397898e5502075Ea5E830d8914f6F0affe/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xD6c67B93a7b248dF608a653d82a100556144c5DA",
            type: "ERC20",
            address: "0xD6c67B93a7b248dF608a653d82a100556144c5DA",
            name: "ExNetwork Token",
            symbol: "EXNT",
            decimals: 16,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD6c67B93a7b248dF608a653d82a100556144c5DA/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7",
            type: "ERC20",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            name: "Tether",
            symbol: "USDT",
            decimals: 6,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
            pairs: [],
            tag: "default",
          },
          {
            asset: "c60_t0xdacD69347dE42baBfAEcD09dC88958378780FB62",
            type: "ERC20",
            address: "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
            name: "Atari Token",
            symbol: "ATRI",
            decimals: 0,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdacD69347dE42baBfAEcD09dC88958378780FB62/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
            type: "ERC20",
            address: "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
            name: "Yield",
            symbol: "YLD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDcB01cc464238396E213a6fDd933E36796eAfF9f/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xDDB3422497E61e13543BeA06989C0789117555c5",
            type: "ERC20",
            address: "0xDDB3422497E61e13543BeA06989C0789117555c5",
            name: "COTI",
            symbol: "COTI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDDB3422497E61e13543BeA06989C0789117555c5/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xE1c7E30C42C24582888C758984f6e382096786bd",
            type: "ERC20",
            address: "0xE1c7E30C42C24582888C758984f6e382096786bd",
            name: "Curate",
            symbol: "XCUR",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE1c7E30C42C24582888C758984f6e382096786bd/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            type: "ERC20",
            address: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            name: "Injective",
            symbol: "INJ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
            type: "ERC20",
            address: "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
            name: "PILLAR",
            symbol: "PLR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe3818504c1B32bF1557b16C238B2E01Fd3149C17/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            type: "ERC20",
            address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            name: "0x",
            symbol: "ZRX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
            type: "ERC20",
            address: "0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
            name: "WCELO",
            symbol: "WCELO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            type: "ERC20",
            address: "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            name: "SuperFarm",
            symbol: "SUPER",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
            type: "ERC20",
            address: "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
            name: "Ferrum Network",
            symbol: "FRM",
            decimals: 6,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
            type: "ERC20",
            address: "0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
            name: "COIN",
            symbol: "COIN",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
            type: "ERC20",
            address: "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
            name: "ankrETH",
            symbol: "aETHc",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
            type: "ERC20",
            address: "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
            name: "Modefi",
            symbol: "MOD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
            type: "ERC20",
            address: "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
            name: "SURF Finance",
            symbol: "SURF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
            type: "ERC20",
            address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
            name: "renBTC",
            symbol: "renBTC",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
            type: "ERC20",
            address: "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
            name: "Everest",
            symbol: "ID",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEd91879919B71bB6905f23af0A68d231EcF87b14",
            type: "ERC20",
            address: "0xEd91879919B71bB6905f23af0A68d231EcF87b14",
            name: "DMM: Governance",
            symbol: "DMG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEd91879919B71bB6905f23af0A68d231EcF87b14/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
            type: "ERC20",
            address: "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
            name: "Exeedme",
            symbol: "XED",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xee573a945B01B788B9287CE062A0CFC15bE9fd86/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
            type: "ERC20",
            address: "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
            name: "GOVI",
            symbol: "GOVI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
            type: "ERC20",
            address: "0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
            name: "Dopex Governance Token",
            symbol: "DPX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
            type: "ERC20",
            address: "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
            name: "Hermez Network Token",
            symbol: "HEZ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEEF9f339514298C6A857EfCfC1A762aF84438dEE/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
            type: "ERC20",
            address: "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
            name: "DxSale Network",
            symbol: "SALE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF063fE1aB7a291c5d06a86e14730b00BF24cB589/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
            type: "ERC20",
            address: "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
            name: "Rally",
            symbol: "RLY",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
            type: "ERC20",
            address: "0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
            name: "Realio Network",
            symbol: "RIO",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xF411903cbC70a74d22900a5DE66A2dda66507255",
            type: "ERC20",
            address: "0xF411903cbC70a74d22900a5DE66A2dda66507255",
            name: "Verasity",
            symbol: "VRA",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF411903cbC70a74d22900a5DE66A2dda66507255/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf418588522d5dd018b425E472991E52EBBeEEEEE",
            type: "ERC20",
            address: "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
            name: "PUSH",
            symbol: "PUSH",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf418588522d5dd018b425E472991E52EBBeEEEEE/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
            type: "ERC20",
            address: "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
            name: "YfDAI.finance",
            symbol: "Yf-DAI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
            type: "ERC20",
            address: "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
            name: "Fractal",
            symbol: "FCL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3/logo.png",
            pairs: [],
          },
          {
            chainId: 1,
            asset: "c60_t0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
            type: "ERC20",
            address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
            name: "Enjin Coin",
            symbol: "ENJ",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
            type: "ERC20",
            address: "0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
            name: "GIVLY Coin",
            symbol: "GIV",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xF938424F7210f31dF2Aee3011291b658f872e91e",
            type: "ERC20",
            address: "0xF938424F7210f31dF2Aee3011291b658f872e91e",
            name: "Visor.Finance",
            symbol: "VISR",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF938424F7210f31dF2Aee3011291b658f872e91e/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xF94b5C5651c888d928439aB6514B93944eEE6F48",
            type: "ERC20",
            address: "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
            name: "Yield",
            symbol: "YLD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF94b5C5651c888d928439aB6514B93944eEE6F48/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
            type: "ERC20",
            address: "0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
            name: "Hoge Finance",
            symbol: "HOGE",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfAd45E47083e4607302aa43c65fB3106F1cd7607/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
            type: "ERC20",
            address: "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
            name: "DuckDaoDime",
            symbol: "DDIM",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
            type: "ERC20",
            address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
            name: "Moss Carbon Credit",
            symbol: "MCO2",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfC98e825A2264D890F9a1e68ed50E1526abCcacD/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            type: "ERC20",
            address: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            name: "Rarible",
            symbol: "RARI",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
            type: "ERC20",
            address: "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
            name: "Reef",
            symbol: "REEF",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
            type: "ERC20",
            address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
            name: "Amp",
            symbol: "AMP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfF20817765cB7f73d4bde2e66e067E58D11095C2/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
            type: "ERC20",
            address: "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
            name: "FalconSwap Token",
            symbol: "FSW",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x383518188C0C6d7730D91b2c03a03C837814a899",
            type: "ERC20",
            address: "0x383518188C0C6d7730D91b2c03a03C837814a899",
            name: "OlympusDAO",
            symbol: "OHM",
            decimals: 9,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x383518188C0C6d7730D91b2c03a03C837814a899/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
            type: "ERC20",
            address: "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
            name: "Illuvium",
            symbol: "ILV",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
            type: "ERC20",
            address: "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
            name: "Gala",
            symbol: "GALA",
            decimals: 8,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            type: "ERC20",
            address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            name: "Convex Token",
            symbol: "CVX",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x090185f2135308BaD17527004364eBcC2D37e5F6",
            type: "ERC20",
            address: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
            name: "Spell Token",
            symbol: "SPELL",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x090185f2135308BaD17527004364eBcC2D37e5F6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
            type: "ERC20",
            address: "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
            name: "OpenDAO",
            symbol: "SOS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3b484b82567a09e2588A13D54D032153f0c0aEe0/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
            type: "ERC20",
            address: "0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
            name: "Gas DAO",
            symbol: "GAS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6Bba316c48b49BD1eAc44573c5c871ff02958469/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            type: "ERC20",
            address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            name: "Binance USD",
            symbol: "BUSD",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png",
            pairs: [],
            tag: "default",
          },
          {
            asset: "c60_t0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
            type: "ERC20",
            address: "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
            name: "MetisDAO",
            symbol: "Metis",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9E32b13ce7f2E80A01932B42553652E053D6ed8e/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xf4d2888d29D722226FafA5d9B24F9164c092421E",
            type: "ERC20",
            address: "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
            name: "LooksRare",
            symbol: "LOOKS",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4d2888d29D722226FafA5d9B24F9164c092421E/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
            type: "ERC20",
            address: "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
            name: "X2Y2Token",
            symbol: "X2Y2",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            type: "ERC20",
            address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            name: "ApeCoin (APE)",
            symbol: "APE",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
            type: "ERC20",
            address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
            name: "StargateToken",
            symbol: "STG",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6/logo.png",
            pairs: [],
          },
          {
            asset: "c60_t0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            type: "ERC20",
            address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            name: "Pax Dollar",
            symbol: "USDP",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png",
          },
          {
            asset: "c60_t0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
            type: "ERC20",
            address: "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
            name: "UST Token",
            symbol: "UST",
            decimals: 18,
            logoURI:
              "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD/logo.png",
          },
        ],
      }
     
    ];

    let newArray = blockchains.filter((el) => el.name == "Ethereum");
    return newArray;
  }

  reqheaders = (inputheader?) => {
    let newheader = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return newheader;
  };

  httpopts: any = { headers: this.reqheaders() };

  appPlatform=Capacitor.getPlatform();

  tosendpayload = async (inputdata?) => {
    let mywallet = await this.getMyWallet();

    let payload = {
      network: mywallet.network,
      // this should be dependent to the token metadata..but use the below for now..
      chain: "ethereum",
      privatekey: mywallet.privatekey,
      // this is version one, public keys will only be generated from private keys..but use the below for now
      publickey: await this.getPublicKey("ethereum"),
      mnemonic: mywallet.mnemonic,
      data: inputdata || {},
      appid:await this.getAppId()
    };

    return payload;
  };


   urltwo="http://localhost:3000"
  serverurl = "http://172.20.10.2:3000";

  reloadtime=3000

  constructor(
    private http: HttpClient,
    public loader: LoaderService,
    public noti: NotiService,
    public storage: StorageService,
    public popup: PopupService,
    public router: RouterService
  ) {}

  //to server
  txloader: any = false;

  currentViewData: any[] = [];

  async loadShareImg(){
    let appsettings:any= await this.getAppSettings();
    let img_url= appsettings.share_image_url;

    let resp= new Promise(async (resolve,reject)=>{
      this.http.get(img_url, { responseType: "blob" }).subscribe(
        async (res) => {
          try {
            let blobdata: Blob = res;
  
            let gendata=new Promise((resolve,reject)=>{
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
  
              reader.readAsDataURL(blobdata);
            })
  
            let base64img=await gendata
            
            resolve(base64img)
          } catch (error) {
            reject(null)
          }
      
        },
  
        (err) => {        
          reject(null)
        }

      );
    })


     let resdata={
      base64: await resp,
      image_url: img_url
     }

  

    return resdata
   
  }

  async testConnection(){
    let resp=new Promise((resolve,reject)=>{

      this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data)=>{
      resolve(data)
      },
      (error)=>{
      reject(error)
      })

    })

    return resp
  }

  async getAppId(){
    let database = await this.storage.get({ key: "appsettings" });
    let appsettings: any = JSON.parse(database.value);

    return appsettings.appId


  }

  async passViewData(name, data, walletid?) {
    let newCurrentData: any[] = [];

    let ser = this.currentViewData.filter((el) => el.name == name);

    if (ser.length >= 1) {
      for (let index = 0; index < ser.length; index++) {
        let eachdata = ser[index];
        eachdata["name"] = "";
        eachdata["data"] = "";
      }
    }

    let newobj = { name: name, data: data };
    this.currentViewData.push(newobj);

    for (let index = 0; index < this.currentViewData.length; index++) {
      const element = this.currentViewData[index];

      if (element.name == "" || element.data == "") {
      } else {
        newCurrentData.push(element);
      }
    }

    this.currentViewData = newCurrentData;

    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    mywallet.currentViewData = newCurrentData;

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    });
  }

  async getCurrentViewData(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let currentViewData: any[] = mywallet[0].currentViewData;

    if (!currentViewData) {
      return [];
    } else {
      return currentViewData;
    }
  }

  async readViewData(name) {
    let cx = await this.getCurrentViewData().then(
      (data) => {
        let currentViewData = data;

        let ser = currentViewData.filter((el) => el.name == name);

        if (!ser || ser.length <= 0) {
          return false;
        } else {
          let rer = ser[0];

          return rer.data;
        }
      },
      () => {
        return false;
      }
    );

    return cx;
  }

  async gasFeeUsd(tokenname, tokentype, amount) {

    let name = tokenname.toLowerCase();
    let type = tokentype.toLowerCase();

    if (type == "erc20") {
      let baseChain = await this.getToken("Ethereum", "coin");

      if (baseChain == "" || !baseChain) {
        let newbasechain = await this.getAToken("Ethereum", "coin");
        return newbasechain.usdprice * amount;
      } else {
        return baseChain.usdprice * amount;
      }
    } else if (type == "coin") {
      let baseChain = await this.getToken(tokenname, tokentype);

      if (baseChain == "" || !baseChain) {
        let newbasechain = await this.getAToken(tokenname, tokentype);

        return newbasechain.usdprice * amount;
      } else {
        return baseChain.usdprice * amount;
      }
    }
  }

  async tokenBaseChain(tokenname, tokentype) {
    let name = tokenname.toLowerCase();
    let type = tokentype.toLowerCase();

    if (type == "erc20") {
      let baseChain = await this.getToken("Ethereum", "coin");

      if (baseChain == "" || !baseChain) {
        let newbasechain = await this.getAToken("Ethereum", "coin", true);
        return newbasechain;
      } else {
        return baseChain;
      }
    } else if (type == "coin") {
      let baseChain = await this.getToken(tokenname, tokentype);

      if (baseChain == "" || !baseChain) {
        let newbasechain = await this.getAToken(tokenname, tokentype, true);

        return newbasechain;
      } else {
        return baseChain;
      }
    }
  }

  async getCheckSelected(inputnetwork,walletid?){
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let network=mywallet[0].network

    if(inputnetwork == network){
      return true
    }else{
      return false
    }
  }

  async loadNft(tokenaddr, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let rawmynfts = mywallet[0].mynfts;

    let resp = rawmynfts.filter((el) => el.token_address == tokenaddr);

    for (let index = 0; index < resp.length; index++) {
      const eachnft = resp[index];

      let eachmetadata = JSON.parse(eachnft.metadata);
      let front_img;

      if (eachmetadata) {
        front_img = eachmetadata.image || eachmetadata.image_url;
      } else {
        front_img = "";
      }

      eachnft["raw_media"] = front_img;
      eachnft["loaded_media"] = "";
      eachnft["media_status"] = "unloaded";
      eachnft["media_type"] = "";
    }

    return resp;
  }

  async getRawNfts(walletid?){
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let rawmynfts = mywallet[0].mynfts;


    return rawmynfts
  }


  async reloadFunc(){
   
    let resp=new Promise((resolve, reject) => {
     
      this.getErc20InWallet().then(async ()=>{

        await this.getWalletMetadata().then(async ()=>{
          await this.getNfts()
          await this.getAllPrices()
          resolve(true)
        });
       
 
      })
    })

    return resp
  }


  async loadMyNfts(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let filteredarr = [];
    let rawmynfts = mywallet[0].mynfts;

    for (let index = 0; index < rawmynfts.length; index++) {
      const eachraw = rawmynfts[index];

      let checklength = filteredarr.filter(
        (el) => el.token_address == eachraw.token_address
      );

      if (checklength.length >= 1) {
      } else {
        let eachmetadata = JSON.parse(eachraw.metadata);
        let front_img;

        if (eachmetadata) {
          front_img = eachmetadata.image || eachmetadata.image_url;
        } else {
          front_img = "";
        }

        let subnfts = rawmynfts.filter(
          (el) => el.token_address == eachraw.token_address
        );

        for (let index = 0; index < subnfts.length; index++) {
          const eachsubnft = subnfts[index];

          let eachsubmetadata = JSON.parse(eachsubnft.metadata);
          let subfront_img;

          if (eachsubmetadata) {
            subfront_img = eachsubmetadata.image || eachsubmetadata.image_url;
          } else {
            subfront_img = "";
          }

          eachsubnft["raw_media"] = subfront_img;
          eachsubnft["loaded_media"] = "";
          eachsubnft["media_status"] = "unloaded";
          eachsubnft["media_type"] = "";
        }

        let eachobj = {
          name: eachraw.name,
          token_address: eachraw.token_address,

          media_type: "",
          raw_media: front_img,
          loaded_media: "",
          media_status: "unloaded",

          nfts: subnfts,
        };

        filteredarr.push(eachobj);
      }
    }

    return filteredarr;
  }

  async withdrawEarnings(){
    let url = this.serverurl + "/airdrop/withdrawEarnings";
    this.loader.start();

    this.http.post(url, await this.tosendpayload(), this.httpopts).subscribe(
      async (value: any) => {

    await this.getWalletMetadata().then(()=>{
      this.loader.end();

      const message = {
        type: 'message',
        height: 'mini',
        transparent: true,
        message: 'Your funds has been sent to your wallet,check your Tether (USDT) balance to confirm',
        messagetitle: 'Withdrawal Successful',
        messageimg: true,
        messageimgurl: '../../assets/images/greensuccess.png',
        messageactions: true,
        actionname: 'Go To Wallet'
    };

   let confirmfunc=async ()=>{
   this.popup.close()
   this.router.naviTo(['/account','wallet']);
   }

      this.popup.initpopup(message,confirmfunc);

     })
     
      },
      (error) => {

        this.loader.end();
        console.log(error);
        this.noti.notify('error','An error occured!')  

      }
    );

  }


  async getNfts() {
    let url = this.serverurl + "/app/getAllNfts";

    this.http.post(url, await this.tosendpayload(), this.httpopts).subscribe(
      async (value: any) => {
        let nfts = value;

      if(Array.isArray(nfts)){
          await this.updateNft(nfts);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getErc20InWallet() {
   

    let resp = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/app/getErc20TokensInWallet";

      this.http.post(url, await this.tosendpayload(), this.httpopts).subscribe(
        async (value: any) => {
        
          for (let index = 0; index < value.length; index++) {
            const eachvalue = value[index];

            let searchquery = await this.searchMyTokens(
              eachvalue.name,
              "ERC20"
            );

            if (searchquery == true) {
            } else {
              let valr = eachvalue;

              valr["type"] = "ERC20";

              valr["coinbalance"] = 0;
              valr["usdbalance"] = 0;
              valr["usdprice"] = 0;
              valr["pendingTxs"] = [];

              valr["logoURI"] = valr.logo;

              let networkname = await this.getCurrentNetworkName();

              if (networkname != "mainnet") {
                valr["network"] = networkname;
              }

              valr["chainId"] = await this.getCurrentNetworkNumber();
              valr["publickey"] = await this.getPublicKey("ethereum");
              valr["address"] = valr.token_address;

              await this.saveToken(valr).then(() => {
                console.log("Saved! " + valr);
              });
            }
          }

          resolve(value);
        },
        (error) => {
         console.log(error)
          reject(error);
        }
      );
    });
  }

  async getErc20Metadata(address) {
    let data = {
      contract_address: address,
    };

    this.loader.start();

    let resp = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/app/getErc20Metadata";

      this.http
        .post(url, await this.tosendpayload(data), this.httpopts)
        .subscribe(
          async (value: any) => {
            this.loader.end();

            resolve(value);
          },
          (error) => {
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          }
        );
    });

    return resp;
  }

  async sendErc721Tx(txdata){
    this.loader.start();

    let tx = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/app/sendErc721Tx";

      this.http
        .post(url, await this.tosendpayload(txdata), this.httpopts)
        .subscribe(
          async (value: any) => {
            this.loader.end();

            if (value.status == true) {
              resolve(value);
            } else {
              if(value.reason.code=='UNPREDICTABLE_GAS_LIMIT'){
                this.noti.notify("error", "Insufficient Gas");
              }else{
                this.noti.notify("error", "An error occurred");
              }

              reject(value);
            }
          },
          (error) => {
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          }
        );
    });

    return tx;
  }

  async sendErc1155Tx(txdata){
    this.loader.start();

    let tx = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/app/sendErc1155Tx";

      this.http
        .post(url, await this.tosendpayload(txdata), this.httpopts)
        .subscribe(
          async (value: any) => {
            this.loader.end();

            if (value.status == true) {
              resolve(value);
            } else {
              if(value.reason.code=='UNPREDICTABLE_GAS_LIMIT'){
                this.noti.notify("error", "Insufficient Gas");
              }else{
                this.noti.notify("error", "An error occurred");
              }
             

              reject(value);
            }
          },
          (error) => {
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          }
        );
    });

    return tx;
  }

  async sendTx(txdata) {
    if (txdata.token.type == "coin") {
      this.loader.start();

      let tx = new Promise(async (resolve, reject) => {
        let url = this.serverurl + "/app/sendNativeTx";

        this.http
          .post(url, await this.tosendpayload(txdata), this.httpopts)
          .subscribe(
            async (value: any) => {
              this.loader.end();

              if (value.status == true) {
                resolve(value);
              } else {
                this.noti.notify("error", "An error occurred");

                reject(value);
              }
            },
            (error) => {
              this.loader.end();
              this.noti.notify(
                "error",
                "An error occurred",
                "Couldn't connect to the internet"
              );
              reject(error);
            }
          );
      });

      return tx;
    } else {
      this.loader.start();

      let tx = new Promise(async (resolve, reject) => {
        let url = this.serverurl + "/app/sendErc20Tx";

        this.http
          .post(url, await this.tosendpayload(txdata), this.httpopts)
          .subscribe(
            async (value: any) => {
              this.loader.end();

              if (value.status == true) {
                resolve(value);
              } else {
                this.noti.notify("error", "An error occurred");

                reject(value);
              }
            },
            (error) => {
              this.loader.end();
              this.noti.notify(
                "error",
                "An error occurred",
                "Couldn't connect to the internet"
              );
              reject(error);
            }
          );
      });

      return tx;
    }
  }

  async getTxMetadata(data) {
    this.loader.start();

    let tx = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/app/getTxMetadata";

      this.http
        .post(url, await this.tosendpayload(data), this.httpopts)
        .subscribe(
          async (value: any) => {
            this.loader.end();
            if (value.status == true) {
              resolve(value);
            } else {
              if (value.reason == "recipient_invalid_address") {
                this.noti.notify(
                  "error",
                  "Invalid Recipient Address",
                  "The address you entered is invalid"
                );
              } else {
                this.noti.notify("error", "An error occurred");
              }

              reject(value);
            }
          },
          (error) => {
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          }
        );
    });

    return tx;
  }

  async getTxs(token) {
    this.txloader = true;
    let txs = new Promise(async (resolve, reject) => {
      let result;

      if (token.type == "coin") {
        let url = this.serverurl + "/app/getNativeTxs";

        this.http
          .post(url, await this.tosendpayload(), this.httpopts)
          .subscribe(
            (value: any) => {
              this.txloader = false;
              result = value;

              resolve(result);
            },
            (error) => {
              this.txloader = false;

              result = [];

              reject(error);
            }
          );
      } else {
        let url = this.serverurl + "/app/getTokenTxs";

        let payload: any = {
          contractaddr: token.address,
        };

        this.http
          .post(url, await this.tosendpayload(payload), this.httpopts)
          .subscribe(
            (value: any) => {
              this.txloader = false;

              result = value;

              resolve(result);
            },
            (error) => {
              this.txloader = false;

              result = [];

              reject(error);
            }
          );
      }
    });

    return txs;
  }

  async getNftTxs(token_contract){
    this.txloader = true;

    let payload={
     'contractaddr':token_contract
    }

    let txs = new Promise(async (resolve, reject) => {
      let result;

        let url = this.serverurl + "/app/nftTxs";

        this.http
          .post(url, await this.tosendpayload(payload), this.httpopts)
          .subscribe(
            (value: any) => {
              this.txloader = false;
              result = value;
              resolve(result);
            },
            (error) => {
              this.txloader = false;

              result = [];

              reject(error);
            }
          );
   })
  
   return txs

}

  async getTokenMetadata(token, returntype?) {
    let payload = {
      tokens: [token],
    };

    let url = this.serverurl + "/app/getAllMetadata";

    if (!returntype) {
      this.http
        .post(url, await this.tosendpayload(payload), this.httpopts)
        .subscribe(
          async (value: any) => {
            let arr = value.tokenupdates;

            if (!arr.length || arr.length <= 0) {
            } else {
              for (let index = 0; index < arr.length; index++) {
                const element = arr[index];

                if (element.status == true) {
                  await this.updateTokenBalance(
                    element.name,
                    element.symbol,
                    element.balance,
                    element.usdbalance,
                    element.usdprice
                  );
                } else {
                  /*
                  console.log(
                    (element.contractaddr || element.chain) +
                      " Balances Not Found"
                  );

                  */
                }
              }
            }

            console.log("Token Metadata Updated");
          },
          (error) => {
            console.log(error);
          }
        );
    } else if (returntype == true) {
      let res = new Promise(async (resolve, reject) => {
        this.http
          .post(url, await this.tosendpayload(payload), this.httpopts)
          .subscribe(
            async (value: any) => {
              let arr = value.tokenupdates;

              resolve(arr);
            },
            async (error) => {
              reject({});
            }
          );
      });

      return res;
    }
  }

   async addReferrer(refcode){

    let payload={
      refcode:refcode
    }

    let res = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/airdrop/addReferrer";
      this.loader.start()

      this.http
        .post(url, await this.tosendpayload(payload), this.httpopts)
        .subscribe(
          async (value: any) => {
         

          if(value.respstatus==true){
            let data=value.respdata

            await this.storage.set({
              key: "airdrop",
              value: JSON.stringify(data),
            });
          this.noti.notify('success','Saved!');       
          }else{
            if(value.reason=='REFERRER_NOT_FOUND'){
              this.noti.notify(
                "error",
                "Invalid referrer's code"
              
              );
            }

          }

          this.loader.end();
          },
          (error) => {
            console.log(error)
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          })

    })

    return res
   }


  async joinAirdrop(refcode){

    let payload={
      refcode:refcode
    }

    let res = new Promise(async (resolve, reject) => {
      let url = this.serverurl + "/airdrop/newAirdrop";

      this.loader.start()

      this.http
        .post(url, await this.tosendpayload(payload), this.httpopts)
        .subscribe(
          async (value: any) => {
           

            if(value.respstatus==false){
              if(value.reason=='USER_AVAILABLE'){
this.noti.notify('error','Already Joined!')
this.loader.end();
reject(value.reason)
              }else if(value.reason=='REFERRER_NOT_FOUND'){
                this.noti.notify('error','Referrer code is not valid!')
                this.loader.end();
                reject(value.reason)
              }
            }else{
              await this.createNewAirdrop(value)
              this.loader.end();
              resolve(true)
            }

          

          },
          (error) => {
            console.log(error)
            this.loader.end();
            this.noti.notify(
              "error",
              "An error occurred",
              "Couldn't connect to the internet"
            );
            reject(error);
          }
        );
    });

    return res
  }

  async taskDone(type){


      let resp = new Promise(async (resolve, reject) => {
        this.loader.start();

        let data={
          'type':type
        }

        let url = this.serverurl + "/airdrop/taskDone";

  
      this.http.post(url,await this.tosendpayload(data), this.httpopts).subscribe(async (data)=>{
          
          this.loader.end()
          await this.storage.set({
            key: "airdrop",
            value: JSON.stringify(data),
          });
          console.log('Updated Airdrop')
          resolve(true)  
        },
        (error)=>{

          this.loader.end()
          this.noti.notify('error','An error occurred!')
          reject(error)
        }
      )
    })

    
return resp
  

}

  async getWalletMetadata() {

    let mytokens = await this.getMyTokens();
    let walletId=await this.getCurrentWalletId()

    let payload = {
      tokens: mytokens,
    };

    let url = this.serverurl + "/app/getAllMetadata";

    this.http
      .post(url, await this.tosendpayload(payload), this.httpopts)
      .subscribe(
        async (value: any) => {
          let arr = value.tokenupdates;
          let airdrop_metadata=value.airdrop_metadata
          let airdrop=value.airdrop
          let socials=value.socials
          let share_image_url=value.share_image_url
          
          if (!arr.length || arr.length <= 0) {

          } else {
            for (let index = 0; index < arr.length; index++) {
              const element = arr[index];

              if (element.status == true) {
                await this.updateTokenBalance(
                  element.name,
                  element.symbol,
                  element.balance,
                  element.usdbalance,
                  element.usdprice,
                  walletId
                );
              } else {
                /*
                console.log(
                  (element.contractaddr || element.chain) +
                    " Balances Not Found"
                );
                */
              }
            }
          }

          let metadata={
            airdrop_can_start:airdrop_metadata.status,
            airdrop_expiry_date:airdrop_metadata.expirydate
          }
        
       let update={
        name:'airdrop_metadata',
        value:metadata
       }

       let socialsupdate={
        name:'socials',
        value: socials
       }

       let share_img_update={
        name:'share_image_url',
        value: share_image_url
       }

     
  
       await this.writeToAppSettings(update)
       await this.writeToAppSettings(socialsupdate)
       await this.writeToAppSettings(share_img_update)

       if(airdrop.status==true){
        await this.storage.set({
          key: "airdrop",
          value: JSON.stringify(airdrop.data),
        });
      }


    await this.parseNotis(value.notifications)
        
        },
        (error) => {
          console.log(error);
        }
      );


  }

  async searchArrObj(key,value,arr){
   let res= arr.filter((data)=>{
    return  data[key]== value
    })

    return res
  }

  async parseNotis(new_notis){

    let app_settings=await this.getAppSettings();
    let my_notis:any[]=await app_settings.app_notifications
     
    for (let index = 0; index < new_notis.length; index++) {

      const element = new_notis[index];

      let search=await this.searchArrObj('id',element.id,my_notis)

      if(search.length >= 1){
       
      }else{
        my_notis.push(element)
      }
      
    }

    for (let index = 0; index < my_notis.length; index++) {
      const element = my_notis[index];

      let search=await this.searchArrObj('id',element.id,new_notis)

      if(search.length >= 1){

      }else{
        my_notis[index].status=false
      }
    }

    let update={
      name: 'app_notifications',
      value: my_notis
    }

    await this.writeToAppSettings(update)

  }

  async getAllPrices() {
    let mytokens = await this.getMyTokens();

    let payload = {
      tokens: mytokens,
    };

    let url = this.serverurl + "/app/getAllPrices";

    this.http
      .post(url, await this.tosendpayload(payload), this.httpopts)
      .subscribe(
        async (value: any) => {
          let arr = value;

          if (!arr.length || arr.length <= 0) {
          } else {
            for (let index = 0; index < arr.length; index++) {
              const element = arr[index];

              if (element.status == true) {
                await this.updateTokenPrice(
                  element.name,
                  element.symbol,
                  element.usdprice
                );
              } else {
              }
            }
          }

          console.log("Prices Updated");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async updateTokenPrice(tokenname, tokensymbol, usdprice, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let mytokens = mywallet.mytokens;

    let arrtoken = mytokens.filter(
      (el) => el.name == tokenname && el.symbol == tokensymbol
    );

    // console.log('Function (Update Token balance): '+JSON.stringify(arrtoken[0]))

    if (arrtoken.length <= 0) {
    } else {
      let thetoken: any = arrtoken[0];

      thetoken["usdprice"] = usdprice;

      await this.storage.set({
        key: "wallets",
        value: JSON.stringify(wallets),
      });
    }
  }
  /* async updateChainBalance(chainname,coinbal,usdbal,walletid?){

  let cid;

  if(!walletid){
cid=await this.getCurrentWalletId();
  }else{
cid=walletid;
  }

  let database=await this.storage.get({ key: 'wallets' });
  let wallets:any[]=JSON.parse(database.value);


  let searchwallet=wallets.filter((el)=>el.id==cid);

  
  let mywallet=searchwallet[0];

  console.log('Raw Wallet: '+JSON.stringify(mywallet))

let mytokens=mywallet.mytokens;



let arrtoken=mytokens.filter((el)=>el.name==chainname);

console.log('Function (Update chain balance): '+arrtoken.length)

console.log('Coin Balance: '+coinbal)
console.log('Usd Balance: '+usdbal)

  if(arrtoken.length <= 0){

  }else{

let thetoken:any=arrtoken[0];


thetoken['coinbalance']=coinbal
thetoken['usdbalance']=usdbal

console.log('Updated Token: '+JSON.stringify(thetoken))
console.log('Updated Wallet: '+JSON.stringify(wallets))



await this.storage.set({
key: 'wallets',
value: JSON.stringify(wallets)
}); 



}

}

*/

  async getCurrentNetworkName(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    return mywallet.network;
  }

  async getCurrentNetworkNumber(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let networkname = mywallet.network;

    return this.getNetworkNumber(networkname);
  }

  async updateTokenBalance(
    tokenname,
    tokensymbol,
    coinbal,
    usdbal,
    usdprice,
    walletid?
  ) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let mytokens = mywallet.mytokens;

    let arrtoken = mytokens.filter(
      (el) => el.name == tokenname && el.symbol == tokensymbol
    );

    // console.log('Function (Update Token balance): '+JSON.stringify(arrtoken[0]))

    if (arrtoken.length <= 0) {
    } else {
      let thetoken: any = arrtoken[0];

      thetoken["coinbalance"] = coinbal;
      thetoken["usdbalance"] = usdbal;

      if (!thetoken.usdprice || thetoken.usdprice == "") {
        thetoken["usdprice"] = usdprice;
      }

      await this.storage.set({
        key: "wallets",
        value: JSON.stringify(wallets),
      });
    }
  }

  async updateNft(nfts, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    mywallet["mynfts"] = nfts;

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    });
  }

  async getTokenPrice(symbol, token?) {
    let searchd = await this.searchMyTokens(token.name, token.type);

    if (searchd == true) {
      let newtoken = await this.getToken(token.name, token.type);
      return newtoken.usdprice;
    } else {
      let res = new Promise(async (resolve, reject) => {
        let tokenurl = this.serverurl + "/app/getTokenPrice";

        let payload: any = {
          symbol: symbol.toUpperCase(),
        };

        this.http
          .post(tokenurl, await this.tosendpayload(payload), this.httpopts)
          .subscribe(
            (value: any) => {
              let response = value.price;
              resolve(response);
            },
            (error) => {
              console.log(error);
              reject(error);
            }
          );
      });

      return res;
    }
  }

  //end of to server

  async getDefaultTokensPreset(publickey?) {
  
    let newArr;

    let set_in={
      publickey:publickey,
      set_inmytoken:false,
      currentnetwork:'mainnet'
    }

  await this.getAllTokens(set_in).then((value) => {
      newArr = value.filter((el) => el.tag == "default");
    });
    return newArr;
  }

  async getDefaultTokens() {
    let newArr;

  await this.getAllTokens().then((value) => {
      newArr = value.filter((el) => el.tag == "default");
    });
    return newArr;
  }


  getNetworkNumber(networkname) {
    switch (networkname) {
      case "mainnet":
        return 1;
        break;

      case "goerli":
        return 5;
        break;

      case "kovan":
        return 42;
        break;

      default:
        return 1;
        break;
    }
  }

  getNetworkName(networknumber) {
    switch (networknumber) {
      case 1:
        return "mainnet";
        break;

      case 5:
        return "goerli";
        break;

      case 42:
        return "kovan";
        break;

      default:
        return "mainnet";
        break;
    }
  }

  async getMyTokens(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    let filteredarr = [];
    let rawmytokens = mywallet[0].mytokens;

    for (let index = 0; index < rawmytokens.length; index++) {
      const eachtoken = rawmytokens[index];

      if (eachtoken == "") {
      } else {
        filteredarr.push(eachtoken);
      }
    }

    let walletNetwork = await this.getCurrentNetworkName();
    let restoken = [];

    for (let index = 0; index < filteredarr.length; index++) {
      const eachtoken = filteredarr[index];

      if (eachtoken.type == "coin") {
        restoken.push(eachtoken);
      }
      if (eachtoken.type != "coin") {
        if (walletNetwork == "mainnet" && !eachtoken.network) {
          restoken.push(eachtoken);
        } else if (walletNetwork != "mainnet" && eachtoken.network) {
          if (eachtoken.network == walletNetwork) {
            restoken.push(eachtoken);
          }
        }
      }
    }

    return restoken;

    return filteredarr;
  }

  async getATokenOffline(tokenname, tokentype) {
    const mytokens = await this.getAllTokens();

    let tokensearch = mytokens.filter(
      (el) => el.name == tokenname && el.type == tokentype
    );
    let thetoken = tokensearch[0];

    return thetoken;
  }

  async getAToken(tokenname, tokentype, offline?) {
    const mytokens = await this.getAllTokens();

    let tokensearch = mytokens.filter(
      (el) => el.name == tokenname && el.type == tokentype
    );
    let thetoken = tokensearch[0];
    let publicKey=await this.getPublicKey('ethereum');

    thetoken['publickey']=publicKey


    let response: any;

    if (offline == true) {
      response = thetoken;
    } else if (!offline || offline == false || offline == "") {
      this.loader.start();
      await this.getTokenMetadata(thetoken, true).then(
        (data) => {
          this.loader.end();
          let rawupdate = data;

          let update = rawupdate[0];
          
          thetoken["usdbalance"] = update.usdbalance;
          thetoken["coinbalance"] = update.balance;
          thetoken["usdprice"] = update.usdprice;

          response = thetoken;
        },
        (error) => {
          this.loader.end();
          response = {};
        }
      );

      let tokenusdbal = Number(response.usdbalance);
      let tokencoinbal = Number(response.coinbalance);
      let tokenusdprice = Number(response.usdprice);

      response.coinbalance = tokencoinbal;
      response.usdbalance = tokenusdbal;
      response.usdprice = tokenusdprice;
    }

    console.log(response);

    return response;
  }

  async getToken(tokenname, tokentype, walletid?) {
    const mytokens = await this.getMyTokens();
    let publicKey=await this.getPublicKey('ethereum');

    let tokensearch = mytokens.filter(
      (el) => el.name == tokenname && el.type == tokentype
    );
    let tokenusdbal = Number(tokensearch[0].usdbalance);
    let tokencoinbal = Number(tokensearch[0].coinbalance);
    let tokenusdprice = Number(tokensearch[0].usdprice);

    
    tokensearch[0].publickey = publicKey;

    tokensearch[0].coinbalance = tokencoinbal;
    tokensearch[0].usdbalance = tokenusdbal;
    tokensearch[0].usdprice = tokenusdprice;

    return tokensearch[0];
  }

  async getAllTokens(setdata?){
    let tokens = [];
    let subtokens = [];
    let set_publickey,set_inmytoken,set_currentnetwork
  

    if(setdata){

     set_publickey=(chainname?)=>{
      return setdata.publickey
    }

    set_inmytoken=(name?,type?)=>{
      return setdata.set_inmytoken
    }


    set_currentnetwork=()=>{
     return setdata.currentnetwork
    }

    }else{

      set_publickey=async (chainname)=>{
        return await this.getPublicKey('ethereum');
      }

      set_inmytoken=async (name,type)=>{
        return await this.searchMyTokens(name,type);
      }


      set_currentnetwork=async ()=>{
       return await this.getCurrentNetworkName()
      }

    } 


    for (let index = 0; index < this.getraw().length; index++) {
      var eachchain = this.getraw()[index];

      var subt: any = {};
      subt = eachchain.tokens;

      if (!subt) {
      } else {
        let subtobj = {
          chainsymbol: eachchain.symbol,
          chaintype: "token",
          chainname: eachchain.name,
          tokens: subt,
        };
        subtokens.push(subtobj);
      }

      eachchain["tokens"] = "";

     
        eachchain["coinbalance"] = 0;
        eachchain["usdbalance"] = 0;
        eachchain["usdprice"] = 0;
        tokens.push(eachchain);
      
    }

    for (let index = 0; index < subtokens.length; index++) {
      let eachsubtobj: any = subtokens[index];

      let subtarr: any[] = eachsubtobj.tokens;

      let chainsymbol: any = eachsubtobj.chainsymbol;
      let chaintype: any = eachsubtobj.chaintype;
      let chainname: any = eachsubtobj.chainname;

      for (let index = 0; index < subtarr.length; index++) {
        let subtokenz = subtarr[index];

          subtokenz["coinbalance"] = 0;
          subtokenz["usdbalance"] = 0;
          subtokenz["usdprice"] = 0;
          tokens.push(subtokenz);
        
      }
    }

    let walletNetwork = await set_currentnetwork();
    let restoken = [];

    let publicKey=await set_publickey()
    
    for (let index = 0; index < tokens.length; index++) {
      const eachtoken = tokens[index];
      eachtoken["pendingTxs"] = [];
      eachtoken['publickey']=publicKey

      if (eachtoken.type != "coin") {
        if (walletNetwork == "mainnet") {
          restoken.push(eachtoken);
        } else {
        }
      } else {
        restoken.push(eachtoken);
      }
    }

    return restoken;

  }

  async getAllTokens_prev(setdata?) {
    let tokens = [];
    let subtokens = [];
    let set_publickey,set_inmytoken,set_currentnetwork

    if(setdata){

     set_publickey=(chainname?)=>{
      return setdata.publickey
    }

    set_inmytoken=(name?,type?)=>{
      return setdata.set_inmytoken
    }


    set_currentnetwork=()=>{
     return setdata.currentnetwork
    }

    }else{

      set_publickey=async (chainname)=>{
        return await this.getPublicKey(chainname);
      }

      set_inmytoken=async (name,type)=>{
        return await this.searchMyTokens(name,type);
      }


      set_currentnetwork=async ()=>{
       return await this.getCurrentNetworkName()
      }




    }

    for (let index = 0; index < this.getraw().length; index++) {
      var eachchain = this.getraw()[index];

      var subt: any = {};
      subt = eachchain.tokens;

      if (!subt) {
      } else {
        let subtobj = {
          chainsymbol: eachchain.symbol,
          chaintype: "token",
          chainname: eachchain.name,
          tokens: subt,
        };
        subtokens.push(subtobj);
      }

      eachchain["tokens"] = "";

      eachchain["publickey"] = await set_publickey(eachchain.name)

      let inmytoken =await set_inmytoken(eachchain.name, eachchain.type)

      if (inmytoken == true) {
        let mytoken = await this.getToken(eachchain.name, eachchain.type);
        tokens.push(mytoken);
      } else if (inmytoken == false) {
        eachchain["coinbalance"] = 0;
        eachchain["usdbalance"] = 0;
        eachchain["usdprice"] = 0;
        tokens.push(eachchain);
      }
    }

    for (let index = 0; index < subtokens.length; index++) {
      let eachsubtobj: any = subtokens[index];

      let subtarr: any[] = eachsubtobj.tokens;

      let chainsymbol: any = eachsubtobj.chainsymbol;
      let chaintype: any = eachsubtobj.chaintype;
      let chainname: any = eachsubtobj.chainname;

      for (let index = 0; index < subtarr.length; index++) {
        let subtokenz = subtarr[index];
        subtokenz["publickey"] = await set_publickey(chainname);

        let inmytoken = await set_inmytoken(
          subtokenz.name,
          subtokenz.type
        );

        if (inmytoken == true) {
          let mytoken = await this.getToken(subtokenz.name, subtokenz.type);
          tokens.push(mytoken);
        } else if (inmytoken == false) {
          subtokenz["coinbalance"] = 0;
          subtokenz["usdbalance"] = 0;
          subtokenz["usdprice"] = 0;
          tokens.push(subtokenz);
        }
      }
    }

    let walletNetwork = await set_currentnetwork();
    let restoken = [];

    for (let index = 0; index < tokens.length; index++) {
      const eachtoken = tokens[index];
      eachtoken["pendingTxs"] = [];

      if (eachtoken.type != "coin") {
        if (walletNetwork == "mainnet") {
          restoken.push(eachtoken);
        } else {
        }
      } else {
        restoken.push(eachtoken);
      }
    }

    return restoken;
  }

  async getAllChains() {
    let chains = [];

    for (let index = 0; index < this.getraw().length; index++) {
      var eachchain = this.getraw()[index];
      eachchain["tokens"] = "";

      eachchain["publickey"] = await this.getPublicKey(eachchain.name);

      let inmytoken = await this.searchMyTokens(eachchain.name, eachchain.type);

      if (inmytoken == true) {
        let mytoken = await this.getToken(eachchain.name, eachchain.type);
        chains.push(mytoken);
      } else if (inmytoken == false) {
        eachchain["coinbalance"] = 0;
        eachchain["usdbalance"] = 0;

        chains.push(eachchain);
      }
    }

    return chains;
  }

  async addPendingTx(name, type, tx, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let mytokens = mywallet.mytokens;

    let arrtoken = mytokens.filter((el) => el.name == name && el.type == type);
    let thetoken = arrtoken[0];

    if (!thetoken.pendingTxs) {
      let newarr = [];

      newarr.push(tx);

      thetoken["pendingTxs"] = newarr;
    } else {
      let newarr = thetoken.pendingTxs;

      newarr.push(tx);

      thetoken["pendingTxs"] = newarr;
    }

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    });
  }

  async removePendingTx(tokenname, tokentype, hashes, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let mytokens = mywallet.mytokens;

    let arrtoken = mytokens.filter(
      (el) => el.name == tokenname && el.type == tokentype
    );
    let thetoken = arrtoken[0];
    let pendingTxs = thetoken.pendingTxs;

    

    for (let index = 0; index < hashes.length; index++) {
      const eachhash = hashes[index];


      for (let x = 0; x < pendingTxs.length; x++) {
        const eachpend = pendingTxs[x];

        if(eachpend.hash==eachhash){

          pendingTxs[x]=''

        }
        
      }
    }

  
    await this.storage.set({
    key: "wallets",
    value: JSON.stringify(wallets),
  });

  }

  async updateToken(name, type, update, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    let mytokens = mywallet.mytokens;

    let arrtoken = mytokens.filter((el) => el.name == name && el.type == type);

    if (arrtoken.length <= 0) {
    } else {
      let thetoken: any = arrtoken[0];

      let sorted = Object.entries(update);

      for (let index = 0; index < sorted.length; index++) {
        const element = sorted[index];
        const name = element[0];
        const value = element[1];
        thetoken[name] = value;
      }

      await this.storage.set({
        key: "wallets",
        value: JSON.stringify(wallets),
      });
    }
  }

  async searchMyTokens(name, type) {
    let mytokens = await this.getMyTokens();

    let searchedTokens: any[] = mytokens.filter(
      (el) => el.name == name && el.type == type
    );

    if (searchedTokens.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  async saveNetwork(network, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mywallet = searchwallet[0];

    mywallet["network"] = network;

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    });

    await this.getWalletMetadata();
  }

async selectWallet(walletid){
  let allWallets=await this.getAllWallet()


  allWallets.forEach(async el=>{
    if(el.id != walletid){
      el.currentview=false
    }else{
      el.currentview=true
    }
  })

  await this.storage.set({
    key: "wallets",
    value: JSON.stringify(allWallets),
  });
  
}
  async saveToken(senttoken, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let tokentype = senttoken.type;
    let tokenname = senttoken.name;

    let publicKey=await this.getPublicKey('ethereum');

    senttoken['publickey']=publicKey

    if (!senttoken.logoURI || senttoken.logoURI == "") {
      senttoken.logoURI = "../../assets/images/tokens/defaulttoken.png";
    }

    let searched = await this.searchMyTokens(tokenname, tokentype);

    if (searched == true) {
    } else {
      //replace with get token balance,dont forget

      let database = await this.storage.get({ key: "wallets" });
      let wallets: any[] = JSON.parse(database.value);

      let searchwallet = wallets.filter((el) => el.id == cid);

      let mywallet = searchwallet[0];

      mywallet.mytokens.push(senttoken);

      await this.storage.set({
        key: "wallets",
        value: JSON.stringify(wallets),
      });

     await this.getTokenMetadata(senttoken);
    }
  }

  async getAppSettings(){
    let database = await this.storage.get({ key: "appsettings" });
    let settings: any = JSON.parse(database.value);

    return settings
  }


  async saveAppSettings(settings){
    await this.storage.set({
      key: "appsettings",
      value: JSON.stringify(settings),
    });

  }

  async unsaveToken(tokenname, tokentype, walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let searchwallet = wallets.filter((el) => el.id == cid);

    let mytokens = searchwallet[0].mytokens;

    for (let index = 0; index < mytokens.length; index++) {
      if (
        mytokens[index].name == tokenname &&
        mytokens[index].type == tokentype
      ) {
        mytokens[index] = "";
      }
    }

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    });
  }
async getWalletPublicKey(chainname,walletid){
  let name = chainname.toLowerCase();

  let mywallet = await this.getMyWallet(walletid);

  let availkeys = mywallet.publickeys;

  let searchedkey = availkeys.filter((el) => el.chain == name);

  let keydata = searchedkey[0];

  let publickey = keydata.publickey;

  return publickey;
}


  async getPublicKey(chainname) {
    let name = chainname.toLowerCase();

    let mywallet = await this.getMyWallet();

    let availkeys = mywallet.publickeys;

    let searchedkey = availkeys.filter((el) => el.chain == name);

    let keydata = searchedkey[0];

    let publickey = keydata.publickey;

    return publickey;
  }

  async randToken(){
    let fi=Math.random().toString(36).substr(2);
    let fu=Math.random().toString(36).substr(2);
    return fi+fu
  }

  async getAirdropMetadata(){

    let resp= new Promise((resolve,reject)=>{

      let airdropurl=this.serverurl+'/airdrop/getAirdropMetadata' 

      this.http.get(airdropurl,this.httpopts).subscribe(async (data:any)=>{

        let metadata={
          airdrop_can_start:data.status,
          airdrop_expiry_date:data.expirydate
        }
        
        resolve(metadata)

      },
      (error)=>{
        let metadata={
          airdrop_can_start:null,
          airdrop_expiry_date:null
        }
       resolve(metadata)
      })
    })

 return resp

  }

  async createDefault() {
    let rdata;
  
    let resp = new Promise((resolve, reject) => {
 
      this.loader.start();
      let url = this.serverurl + "/app/createDefaultWallet";

      this.http.get(url).subscribe(

        async (data: any) => {
    
          let defaulttoken = await this.getDefaultTokensPreset(data.publicKey);
            
          for (let index = 0; index < defaulttoken.length; index++) {
            let eachtoken = defaulttoken[index];

            if (!eachtoken.logoURI || eachtoken.logoURI == "") {
              eachtoken["logoURI"] = "../../assets/images/tokens/defaulttoken.png";
            }

          }
          
          let wallets: any[] = [];

          if(data.mnemonic){
 
            let newwallet = {
              id: "1",
              name: "Main Wallet",
              mytokens: defaulttoken,
              mynfts: [],
              publickeys: [{ chain: "ethereum", publickey: data.publicKey }],
              privatekey: data.privateKey,
              mnemonic: data.mnemonic,
              currentview: true,
              network: "mainnet",
              pendingTxs: [],
            };


            wallets.push(newwallet);


            let appsettings={
            auth:{
             signature:false,
             lock:false
            },

            notification:{
              transaction:true,
              others:true
            },

            appId: await this.randToken(),

            airdrop_metadata: await this.getAirdropMetadata(),

            app_notifications:[]

            }

            await this.storage.set({
              key: "wallets",
              value: JSON.stringify(wallets),
            });


            await this.storage.set({
              key: "appsettings",
              value: JSON.stringify(appsettings),
            });



          this.loader.end();

          resolve(true);

          }else{
            this.loader.end();
            this.noti.notify('error','An error occured!','Try again later')
            reject(false);
          }
  
        },
        (error) => {
          this.loader.end();
          this.noti.notify('error','An error occured!','Check your network')
          console.log(error);
          reject(error);
        }
      );
    });

    return resp;
  }

  async getWalletMnemonic(walletid?){

    let mywallet = await this.getMyWallet(walletid);

    return mywallet.mnemonic
  }

  async createNewWallet(createData){

    let resp = new Promise((resolve, reject) => {
      this.loader.start();
      let url = this.serverurl + "/app/createNewWallet";

      this.http.get(url).subscribe(
        async (data: any) => {
         

          console.log(data);

          let database = await this.storage.get({ key: "wallets" });
          let wallets = JSON.parse(database.value);


          wallets.forEach(el => {
            el.currentview=false
          });


          if(data.mnemonic){

            let resd={
              'walletid':await this.newWalletId(),
              'status':true
            }

            let defaulttoken = await this.getDefaultTokensPreset(data.publicKey);
            
            for (let index = 0; index < defaulttoken.length; index++) {
              let eachtoken = defaulttoken[index];
  
              if (!eachtoken.logoURI || eachtoken.logoURI == "") {
                eachtoken["logoURI"] = "../../assets/images/tokens/defaulttoken.png";
              }
  
            }
 
            let newwallet = {
              id: await this.newWalletId(),
              name: createData.walletname,
              mytokens: defaulttoken,
              mynfts: [],
              publickeys: [{ chain: "ethereum", publickey: data.publicKey }],
              privatekey: data.privateKey,
              mnemonic: data.mnemonic,
              currentview: true,
              network: "mainnet",
              pendingTxs: [],
            };

            wallets.push(newwallet);
  
            await this.storage.set({
              key: "wallets",
              value: JSON.stringify(wallets),
            });

          this.loader.end();

          resolve(resd);

          }else{
            this.loader.end();
            this.noti.notify('error','An error occured!','Try again later')
            reject(false);
          }
  
        },
        (error) => {
          this.loader.end();
          this.noti.notify('error','An error occured!','Check your network')
          console.log(error);
          reject(false);
        }
      );

    })

    return resp;
  }

  async importPrivatekeyWallet(importdata){

    let resp = new Promise((resolve, reject) => {
      this.loader.start();
      let url = this.serverurl + "/app/getPrivatekeyMetadata";

    let payload = {
      network: 'mainnet',
      chain: "ethereum",
      data: {"privatekey":importdata.pk},
    };

    this.http.post(url,payload, this.httpopts).subscribe(
        async (data: any) => {
          
          

          if(data.status==false && data.error=='invalid_privatekey'){
            this.noti.notify('error','Invalid Private Key');
            this.loader.end()
            reject('Invalid Private Key');
          }else{

            let database = await this.storage.get({ key: "wallets" });
            let wallets = JSON.parse(database.value);

            wallets.forEach(el => {
              el.currentview=false
            });

            let newwallet = {
              id: await this.newWalletId(),
              name: importdata.walletname,
              mytokens: [],
              mynfts: [],
              publickeys: [{ chain: "ethereum", publickey: data.publicKey }],
              privatekey: data.privateKey,
              mnemonic: data.mnemonic,
              currentview: true,
              network: "mainnet",
              pendingTxs: [],
            };

            wallets.push(newwallet)

            await this.storage.set({
              key: "wallets",
              value: JSON.stringify(wallets),
            });

            let defaulttoken = await this.getDefaultTokens();

            console.log(defaulttoken);
  
            for (let index = 0; index < defaulttoken.length; index++) {
              let currentobj = defaulttoken[index];
              await this.saveToken(currentobj);
            }

            this.loader.end()
  
            resolve(true)
          }
        
        },
        (error) => {
          this.loader.end();
          this.noti.notify('error','An error occured!','Check your network')
          console.log(error);
          reject(false);
        }
        )

    })

    return resp
    
  }

  async importMnemonicWallet(importdata){
    let resp = new Promise((resolve, reject) => {
      this.loader.start();
      let url = this.serverurl + "/app/getMnemonicMetadata";

    let payload = {
      network: 'mainnet',
      chain: "ethereum",
      data: {"phrase":importdata.phrase},
    };

    this.http.post(url,payload, this.httpopts).subscribe(
        async (data: any) => {
         
          

          if(data.status==false && data.error=='invalid_mnemonic'){
            this.noti.notify('error','Invalid Mnemonic Phrase');
            this.loader.end()
            reject('Invalid Mnemonic');
          }else{

            let database = await this.storage.get({ key: "wallets" });
            let wallets = JSON.parse(database.value);

            wallets.forEach(el => {
              el.currentview=false
            });

            let newwallet = {
              id: await this.newWalletId(),
              name: importdata.walletname,
              mytokens: [],
              mynfts: [],
              publickeys: [{ chain: "ethereum", publickey: data.publicKey }],
              privatekey: data.privateKey,
              mnemonic: data.mnemonic,
              currentview: true,
              network: "mainnet",
              pendingTxs: [],
            };

            wallets.push(newwallet)

            await this.storage.set({
              key: "wallets",
              value: JSON.stringify(wallets),
            });

            let defaulttoken = await this.getDefaultTokens();

            console.log(defaulttoken);
  
            for (let index = 0; index < defaulttoken.length; index++) {
              let currentobj = defaulttoken[index];
              await this.saveToken(currentobj);
            }
  
            this.loader.end()
            resolve(true)
          }
        
        },
        (error) => {
          this.loader.end();
          this.noti.notify('error','An error occured!','Check your network')
          console.log(error);
          reject(false);
        }
        )

    })

    return resp
  }

  private async getCurrentWalletId() {
    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el:any) => el.currentview == true);

    return mywallet[0].id;
  }

  public async getCurrentWalletIndex() {
    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let currentindex;

    for (let index = 0; index < wallets.length; index++) {
      const obj = wallets[index];

      if (obj.currentview == true) {
        currentindex = index;
      } else {
      }
    }

    return currentindex;
  }

  async getMyWallet(walletid?) {
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let mywallet = wallets.filter((el) => el.id == cid);

    return mywallet[0];
  }

  async writeToMyWallet(data,walletid?){
    let cid;

    if (!walletid) {
      cid = await this.getCurrentWalletId();
    } else {
      cid = walletid;
    }

    let database = await this.storage.get({ key: "wallets" });
    let wallets = JSON.parse(database.value);

    let walletsearch = wallets.filter((el) => el.id == cid);

    let mywallet=walletsearch[0];

    mywallet[data.name]=data.value

    await this.storage.set({
      key: "wallets",
      value: JSON.stringify(wallets),
    })
  
  }


  async writeToAppSettings(data){
    let database = await this.storage.get({ key: "appsettings" });
    let appsettings = JSON.parse(database.value);

    appsettings[data.name]=data.value

    await this.storage.set({
      key: "appsettings",
      value: JSON.stringify(appsettings),
    })
  }

  async getAllWallet() {
    let database = await this.storage.get({ key: "wallets" });
    if(!database){
      return null
    }else{
      let wallets: any[] = JSON.parse(database.value);
      return wallets;
    } 
  }

  

  async newWalletId(){
    let database = await this.storage.get({ key: "wallets" });
    let wallets: any[] = JSON.parse(database.value);

    let lastWallet=wallets.splice(-1);


    let lastid=Number(lastWallet[0].id)
    let newId=lastid+1

    return newId

  }

  async getAirdrop(){
    let database = await this.storage.get({ key: "airdrop" });
    let airdrop: any = JSON.parse(database.value);

    return airdrop
  }

  async checkAirdropWallet(){
    let mywallet=await this.getMyWallet()

    
    if(mywallet.privatekey=='airdrop' || mywallet.mnemonic=='airdrop'){
      return true
    }else{
      return false
    }

  }

  async createNewAirdrop(data){

    let newairdrop=data


    await this.storage.set({
      key: "airdrop",
      value: JSON.stringify(newairdrop),
    });


  }





  async removeWallet(walletid){
    if(walletid == 1){
      this.noti.notify('error','Can not remove main wallet')
    }else{

      let index

      let allwallets=await this.getAllWallet()


      allwallets.forEach((el,newindex)=>{

        if(el.id == walletid){
         index=newindex
        }

      })

  
      allwallets[index]=null

      console.log('Unfiltered yet!',allwallets)
  
      let filtered = allwallets.filter(function (el) {
        return el != null
      });
   
       console.log('filtered',filtered)

      let returnedviews=filtered.filter((el)=>{
       return el.currentview==true
      })
  
      if(returnedviews.length < 1){
  
        let lastwallet=filtered.slice(-1)[0];
       
  
        lastwallet.currentview=true
  
      }
  
  
      await this.storage.set({
        key: "wallets",
        value: JSON.stringify(filtered),
      });
    
  
      this.noti.notify('success','Wallet Removed!')


    }

  }




















}
