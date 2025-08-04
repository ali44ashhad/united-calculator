import { useParams } from "react-router-dom";
import { useState } from "react";
import { calculators } from "../data/calculators";
import Breadcrumb from "../components/Breadcrumb";

import SIPCalculator from "../calculators/finance/SIPCalculator";
import BMICalculator from "../calculators/health/BMICalculator";
import FourZeroOneKCalculator from "../calculators/finance/FourZeroOneKCalculator";
import AmortizationCalculator from "../calculators/finance/AmortizationCalculator";
import AnnuityCalculator from "../calculators/finance/AnnuityCalculator";
import AnnuityPayoutCalculator from "../calculators/finance/AnnuityPayoutCalculator";
import APRCalculator from "../calculators/finance/APRCalculator";
import AutoLeaseCalculator from "../calculators/finance/AutoLeaseCalculator";
import AutoLoanCalculator from "../calculators/finance/AutoLoanCalculator";
import AverageReturnCalculator from "../calculators/finance/AverageReturnCalculator";
import BoatLoanCalculator from "../calculators/finance/BoatLoanCalculator";
import BondCalculator from "../calculators/finance/BondCalculator";
import BudgetCalculator from "../calculators/finance/BudgetCalculator";
import BusinessLoanCalculator from "../calculators/finance/BusinessLoanCalculator";
import CanadianMortgageCalculator from "../calculators/finance/CanadianMortgageCalculator";
import CashBackOrLowInterestCalculator from "../calculators/finance/CashBackOrLowInterestCalculator";
import CDCalculator from "../calculators/finance/CDCalculator";
import CollegeCostCalculator from "../calculators/finance/CollegeCostCalculator";
import CommissionCalculator from "../calculators/finance/CommissionCalculator";
import CompoundInterestCalculator from "../calculators/finance/CompoundInterestCalculator";
import CreditCardCalculator from "../calculators/finance/CreditCardCalculator";
import CreditCardsPayoffCalculator from "../calculators/finance/CreditCardsPayoffCalculator";
import CurrencyCalculator from "../calculators/finance/CurrencyCalculator";
import DebtConsolidationCalculator from "../calculators/finance/DebtConsolidationCalculator";
import DebtPayoffCalculator from "../calculators/finance/DebtPayoffCalculator";
import DebtToIncomeRatioCalculator from "../calculators/finance/DebtToIncomeRatioCalculator";
import DepreciationCalculator from "../calculators/finance/DepreciationCalculator";
import DiscountCalculator from "../calculators/finance/DiscountCalculator";
import DownPaymentCalculator from "../calculators/finance/DownPaymentCalculator";
import EstateTaxCalculator from "../calculators/finance/EstateTaxCalculator";
import FHALoanCalculator from "../calculators/finance/FHALoanCalculator";
import FinanceCalculator from "../calculators/finance/FinanceCalculator";
import FutureValueCalculator from "../calculators/finance/FutureValueCalculator";
import HouseAffordabilityCalculator from "../calculators/finance/HouseAffordabilityCalculator";
import IncomeTaxCalculator from "../calculators/finance/IncomeTaxCalculator";
import InflationCalculator from "../calculators/finance/InflationCalculator";
import InterestCalculator from "../calculators/finance/InterestCalculator";
import InterestRateCalculator from "../calculators/finance/InterestRateCalculator";
import InvestmentCalculator from "../calculators/finance/InvestmentCalculator";
import IRACalculator from "../calculators/finance/IRACalculator";
import IRRCalculator from "../calculators/finance/IRRCalculator";
import LeaseCalculator from "../calculators/finance/LeaseCalculator";
import LoanCalculator from "../calculators/finance/LoanCalculator";
import MarginCalculator from "../calculators/finance/MarginCalculator";
import MarriageTaxCalculator from "../calculators/finance/MarriageTaxCalculator";
import MortgageAmortizationCalculator from "../calculators/finance/MortgageAmortizationCalculator";
import MortgageCalculator from "../calculators/finance/MortgageCalculator";
import MortgageCalculatorUK from "../calculators/finance/MortgageCalculatorUK";
import MortgagePayoffCalculator from "../calculators/finance/MortgagePayoffCalculator";
import PaybackPeriodCalculator from "../calculators/finance/PaybackPeriodCalculator";
import PaymentCalculator from "../calculators/finance/PaymentCalculator";
import PensionCalculator from "../calculators/finance/PensionCalculator";
import PercentOffCalculator from "../calculators/finance/PercentOffCalculator";
import PersonalLoanCalculator from "../calculators/finance/PersonalLoanCalculator";
import PresentValueCalculator from "../calculators/finance/PresentValueCalculator";
import RealEstateCalculator from "../calculators/finance/RealEstateCalculator";
import RefinanceCalculator from "../calculators/finance/RefinanceCalculator";
import RentCalculator from "../calculators/finance/RentCalculator";
import RentVsBuyCalculator from "../calculators/finance/RentVsBuyCalculator";
import RentalPropertyCalculator from "../calculators/finance/RentalPropertyCalculator";
import RepaymentCalculator from "../calculators/finance/RepaymentCalculator";
import RetirementCalculator from "../calculators/finance/RetirementCalculator";
import RMDCalculator from "../calculators/finance/RMDCalculator";
import ROICalculator from "../calculators/finance/ROICalculator";
import RothIRACalculator from "../calculators/finance/RothIRACalculator";
import SalaryCalculator from "../calculators/finance/SalaryCalculator";
import SalesTaxCalculator from "../calculators/finance/SalesTaxCalculator";
import SavingsCalculator from "../calculators/finance/SavingsCalculator";
import SimpleInterestCalculator from "../calculators/finance/SimpleInterestCalculator";
import SocialSecurityCalculator from "../calculators/finance/SocialSecurityCalculator";
import StudentLoanCalculator from "../calculators/finance/StudentLoanCalculator";
import TakeHomePaycheckCalculator from "../calculators/finance/TakeHomePaycheckCalculator";
import VAMortgageCalculator from "../calculators/finance/VAMortgageCalculator";
import VATCalculator from "../calculators/finance/VATCalculator";
import AnorexicBMICalculator from "../calculators/health/AnorexicBMICalculator";
import ArmyBodyFatCalculator from "../calculators/health/ArmyBodyFatCalculator";
import BACCalculator from "../calculators/health/BACCalculator";
import BMRCalculator from "../calculators/health/BMRCalculator";
import BodyFatCalculator from "../calculators/health/BodyFatCalculator";
import BodySurfaceAreaCalculator from "../calculators/health/BodySurfaceAreaCalculator";
import BodyTypeCalculator from "../calculators/health/BodyTypeCalculator";
import CalorieCalculator from "../calculators/health/CalorieCalculator";
import CaloriesBurnedCalculator from "../calculators/health/CaloriesBurnedCalculator";
import CarbohydrateCalculator from "../calculators/health/CarbohydrateCalculator";
import ConceptionCalculator from "../calculators/health/ConceptionCalculator";
import DueDateCalculator from "../calculators/health/DueDateCalculator";
import FatIntakeCalculator from "../calculators/health/FatIntakeCalculator";
import GFRCalculator from "../calculators/health/GFRCalculator";
import HealthyWeightCalculator from "../calculators/health/HealthyWeightCalculator";
import IdealWeightCalculator from "../calculators/health/IdealWeightCalculator";
import LeanBodyMassCalculator from "../calculators/health/LeanBodyMassCalculator";
import MacroCalculator from "../calculators/health/MacroCalculator";
import OneRepMaxCalculator from "../calculators/health/OneRepMaxCalculator";
import OverweightCalculator from "../calculators/health/OvulationCalculator";
import OvulationCalculator from "../calculators/health/OvulationCalculator";
import PaceCalculator from "../calculators/health/PaceCalculator";
import PeriodCalculator from "../calculators/health/PeriodCalculator";
import PregnancyCalculator from "../calculators/health/PregnancyCalculator";
import PregnancyConceptionCalculator from "../calculators/health/PregnancyConceptionCalculator";
import PregnancyWeightGainCalculator from "../calculators/health/PregnancyWeightGainCalculator";
import ProteinCalculator from "../calculators/health/ProteinCalculator";
import TargetHeartRateCalculator from "../calculators/health/TargetHeartRateCalculator";
import TDEECalculator from "../calculators/health/TDEECalculator";
import WeightWatcherPointsCalculator from "../calculators/health/WeightWatcherPointsCalculator";
import AreaCalculator from "../calculators/math/AreaCalculator";
import AverageCalculator from "../calculators/math/AverageCalculator";
import BasicCalculator from "../calculators/math/BasicCalculator";
import BigNumberCalculator from "../calculators/math/BigNumberCalculator";
import BinaryCalculator from "../calculators/math/BinaryCalculator";
import CircleCalculator from "../calculators/math/CircleCalculator";
import CommonFactorCalculator from "../calculators/math/CommonFactorCalculator";
import ConfidenceIntervalCalculator from "../calculators/math/ConfidenceIntervalCalculator";
import DistanceCalculator from "../calculators/math/DistanceCalculator";
import ExponentCalculator from "../calculators/math/ExponentCalculator";
import FactorCalculator from "../calculators/math/FactorCalculator";
import FractionCalculator from "../calculators/math/FractionCalculator";
import GreatestCommonFactorCalculator from "../calculators/math/GreatestCommonFactorCalculator";
import HalfLifeCalculator from "../calculators/math/HalfLifeCalculator";
import HexCalculator from "../calculators/math/HexCalculator";
import LeastCommonMultipleCalculator from "../calculators/math/LeastCommonMultipleCalculator";
import LogCalculator from "../calculators/math/LogCalculator";
import LongDivisionCalculator from "../calculators/math/LongDivisionCalculator";
import MatrixCalculator from "../calculators/math/MatrixCalculator";
import MeanMedianModeRangeCalculator from "../calculators/math/MeanMedianModeRangeCalculator";
import PercentErrorCalculator from "../calculators/math/PercentErrorCalculator";
import NumberSequenceCalculator from "../calculators/math/NumberSequenceCalculator";
import PercentageCalculator from "../calculators/math/PercentageCalculator";
import PermutationCombinationCalculator from "../calculators/math/PermutationCombinationCalculator";
import PrimeFactorizationCalculator from "../calculators/math/PrimeFactorizationCalculator";
import ProbabilityCalculator from "../calculators/math/ProbabilityCalculator";
import PValueCalculator from "../calculators/statistics/PValueCalculator";
import PythagoreanTheoremCalculator from "../calculators/geometry/PythagoreanTheoremCalculator";
import QuadraticFormulaCalculator from "../calculators/math/QuadraticFormulaCalculator";
import RandomNumberGenerator from "../calculators/math/RandomNumberGenerator";
import RatioCalculator from "../calculators/math/RatioCalculator";
import RightTriangleCalculator from "../calculators/geometry/RightTriangleCalculator";
import RootCalculator from "../calculators/math/RootCalculator";
import RoundingCalculator from "../calculators/math/RoundingCalculator";
import SampleSizeCalculator from "../calculators/statistics/SampleSizeCalculator";
import ScientificCalculator from "../calculators/math/ScientificCalculator";
import ScientificNotationCalculator from "../calculators/math/ScientificNotationCalculator";
import SlopeCalculator from "../calculators/math/SlopeCalculator";
import StandardDeviationCalculator from "../calculators/statistics/StandardDeviationCalculator";
import StatisticsCalculator from "../calculators/statistics/StatisticsCalculator";
import SurfaceAreaCalculator from "../calculators/geometry/SurfaceAreaCalculator";
import TriangleCalculator from "../calculators/geometry/TriangleCalculator";
import ZScoreCalculator from "../calculators/statistics/ZScoreCalculator";
import VolumeCalculator from "../calculators/geometry/VolumeCalculator";
import AgeCalculator from "../calculators/other/AgeCalculator";
import BandwidthCalculator from "../calculators/other/BandwidthCalculator";
import BraSizeCalculator from "../calculators/other/BraSizeCalculator";
import BTUCalculator from "../calculators/other/BTUCalculator";
import ConcreteCalculator from "../calculators/other/ConcreteCalculator";
import ConversionCalculator from "../calculators/other/ConversionCalculator";
import DateCalculator from "../calculators/other/DateCalculator";
import DayCounter from "../calculators/other/DayCounter";
import DayOfTheWeekCalculator from "../calculators/other/DayOfTheWeekCalculator";
import DensityCalculator from "../calculators/other/DensityCalculator";
import DewPointCalculator from "../calculators/other/DewPointCalculator";
import DiceRoller from "../calculators/other/DiceRoller";
import ElectricityCalculator from "../calculators/other/ElectricityCalculator";
import EngineHorsepowerCalculator from "../calculators/other/EngineHorsepowerCalculator";
import FuelCostCalculator from "../calculators/other/FuelCostCalculator";
import GasMileageCalculator from "../calculators/other/GasMileageCalculator";
import GDP_Calculator from "../calculators/other/GDP_Calculator";
import GolfHandicapCalculator from "../calculators/other/GolfHandicapCalculator";
import GPACalculator from "../calculators/other/GPACalculator";
import GradeCalculator from "../calculators/other/GradeCalculator";
import GravelCalculator from "../calculators/other/GravelCalculator";
import HeightCalculator from "../calculators/other/HeightCalculator";
import HeatIndexCalculator from "../calculators/other/HeatIndexCalculator";
import HorsepowerCalculator from "../calculators/other/HorsepowerCalculator";
import HoursCalculator from "../calculators/other/HoursCalculator";
import IPSubnetCalculator from "../calculators/other/IPSubnetCalculator";
import LoveCalculator from "../calculators/other/LoveCalculator";
import MassCalculator from "../calculators/other/MassCalculator";
import MileageCalculator from "../calculators/other/MileageCalculator";
import MolarityCalculator from "../calculators/other/MolarityCalculator";
import MolecularWeightCalculator from "../calculators/other/MolecularWeightCalculator";
import MulchCalculator from "../calculators/other/MulchCalculator";
import OhmsLawCalculator from "../calculators/other/OhmsLawCalculator";
import PasswordGenerator from "../calculators/other/PasswordGenerator";
import ResistorCalculator from "../calculators/other/ResistorCalculator";
import RomanNumeralConverter from "../calculators/other/RomanNumeralConverter";
import RoofingCalculator from "../calculators/other/RoofingCalculator";
import ShoeSizeConverter from "../calculators/other/ShoeSizeConversion";
import SleepCalculator from "../calculators/other/SleepCalculator";
import SpeedCalculator from "../calculators/other/SpeedCalculator";
import SquareFootageCalculator from "../calculators/other/SquareFootageCalculator";
import StairCalculator from "../calculators/other/StairCalculator";
import TileCalculator from "../calculators/other/TileCalculator";
import TimeCalculator from "../calculators/other/TimeCalculator";
import TimeCardCalculator from "../calculators/other/TimeCardCalculator";
import TimeDurationCalculator from "../calculators/other/TimeDurationCalculator";
import TimeZoneCalculator from "../calculators/other/TimeZoneCalculator";
import TipCalculator from "../calculators/other/TipCalculator";
import TireSizeCalculator from "../calculators/other/TireSizeCalculator";
import VoltageDropCalculator from "../calculators/other/VoltageDropCalculator";
import WeightCalculator from "../calculators/other/WeightCalculator";
import WindChillCalculator from "../calculators/other/WindChillCalculator";
// Component mapping

const componentMap = {
  SIPCalculator,
  BMICalculator,
  FourZeroOneKCalculator,
  AmortizationCalculator,
  AnnuityCalculator,
  AnnuityPayoutCalculator,
  APRCalculator,
  AutoLeaseCalculator,
  AutoLoanCalculator,
  AverageReturnCalculator,
  BoatLoanCalculator,
  BondCalculator,
  BudgetCalculator,
  BusinessLoanCalculator,
  CanadianMortgageCalculator,
  CashBackOrLowInterestCalculator,
  CDCalculator,
  CollegeCostCalculator,
  CommissionCalculator,
  CompoundInterestCalculator,
  CreditCardCalculator,
  CreditCardsPayoffCalculator,
  CurrencyCalculator,
  DebtConsolidationCalculator,
  DebtPayoffCalculator,
  DebtToIncomeRatioCalculator,
  DepreciationCalculator,
  DiscountCalculator,
  DownPaymentCalculator,
  EstateTaxCalculator,
  FHALoanCalculator,
  FinanceCalculator,
  FutureValueCalculator,
  HouseAffordabilityCalculator,
  IncomeTaxCalculator,
  InflationCalculator,
  InterestCalculator,
  InterestRateCalculator,
  InvestmentCalculator,
  IRACalculator,
  IRRCalculator,
  LeaseCalculator,
  LoanCalculator,
  MarginCalculator,
  MarriageTaxCalculator,
  MortgageAmortizationCalculator,
  MortgageCalculator,
  MortgageCalculatorUK,
  MortgagePayoffCalculator,
  PaybackPeriodCalculator,
  PaymentCalculator,
  PensionCalculator,
  PercentOffCalculator,
  PersonalLoanCalculator,
  PresentValueCalculator,
  RealEstateCalculator,
  RefinanceCalculator,
  RentCalculator,
  RentVsBuyCalculator,
  RentalPropertyCalculator,
  RepaymentCalculator,
  RetirementCalculator,
  RMDCalculator,
  ROICalculator,
  RothIRACalculator,
  SalaryCalculator,
  SalesTaxCalculator,
  SavingsCalculator,
  SimpleInterestCalculator,
  SocialSecurityCalculator,
  StudentLoanCalculator,
  TakeHomePaycheckCalculator,
  VAMortgageCalculator,
  VATCalculator,
  AnorexicBMICalculator,
  ArmyBodyFatCalculator,
  BACCalculator,
  BMRCalculator,
  BodyFatCalculator,
  BodySurfaceAreaCalculator,
  BodyTypeCalculator,
  CalorieCalculator,
  CaloriesBurnedCalculator,
  CarbohydrateCalculator,
  DueDateCalculator,
  FatIntakeCalculator,
  ConceptionCalculator,
  GFRCalculator,
  HealthyWeightCalculator,
  IdealWeightCalculator,
  LeanBodyMassCalculator,
  MacroCalculator,
  OneRepMaxCalculator,
  OverweightCalculator,
  OvulationCalculator,
  PaceCalculator,
  PregnancyCalculator,
  PeriodCalculator,
  PregnancyConceptionCalculator,
  PregnancyWeightGainCalculator,
  ProteinCalculator,
  TargetHeartRateCalculator,
  TDEECalculator,
  WeightWatcherPointsCalculator,
  AreaCalculator,
  AverageCalculator,
  BasicCalculator,
  BigNumberCalculator,
  BinaryCalculator,
  CircleCalculator,
  CommonFactorCalculator,
  ConfidenceIntervalCalculator,
  DistanceCalculator,
  ExponentCalculator,
  FractionCalculator,
  GreatestCommonFactorCalculator,
  FactorCalculator,
  HalfLifeCalculator,
  HexCalculator,
  LeastCommonMultipleCalculator,
  LogCalculator,
  LongDivisionCalculator,
  MatrixCalculator,
  MeanMedianModeRangeCalculator,
  PercentErrorCalculator,
  NumberSequenceCalculator,
  PercentageCalculator,
  PermutationCombinationCalculator,
  PrimeFactorizationCalculator,
  ProbabilityCalculator,
  PValueCalculator,
  PythagoreanTheoremCalculator,
  QuadraticFormulaCalculator,
  RandomNumberGenerator,
  RatioCalculator,
  RightTriangleCalculator,
  RootCalculator,
  RoundingCalculator,
  SampleSizeCalculator,
  ScientificCalculator,
  ScientificNotationCalculator,
  SlopeCalculator,
  StandardDeviationCalculator,
  StatisticsCalculator,
  SurfaceAreaCalculator,
  TriangleCalculator,
  ZScoreCalculator,
  VolumeCalculator,
  AgeCalculator,
  BandwidthCalculator,
  BraSizeCalculator,
  ConcreteCalculator,
  BTUCalculator,
  ConversionCalculator,
  DateCalculator,
  DayCounter,
  DayOfTheWeekCalculator,
  DensityCalculator,
  DewPointCalculator,
  DiceRoller,
  ElectricityCalculator,
  EngineHorsepowerCalculator,
  FuelCostCalculator,
  GasMileageCalculator,
  GDP_Calculator,
  GolfHandicapCalculator,
  GPACalculator,
  GradeCalculator,
  GravelCalculator,
  HeightCalculator,
  HeatIndexCalculator,
  HorsepowerCalculator,
  HoursCalculator,
  IPSubnetCalculator,
  LoveCalculator,
  MassCalculator,
  MileageCalculator,
  MolarityCalculator,
  MolecularWeightCalculator,
  MulchCalculator,
  OhmsLawCalculator,
  PasswordGenerator,
  ResistorCalculator,
  RomanNumeralConverter,
  RoofingCalculator,
  ShoeSizeConverter,
  SleepCalculator,
  SpeedCalculator,
  SquareFootageCalculator,
  StairCalculator,
  TileCalculator,
  TimeCalculator,
  TimeCardCalculator,
  TimeDurationCalculator,
  TimeZoneCalculator,
  TipCalculator,
  TireSizeCalculator,
  VoltageDropCalculator,
  WeightCalculator,
  WindChillCalculator,
  // 👉 Add all other calculator mappings here
};
const CalculatorPage = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const calculator = calculators.find((c) => c.id === id);
  const Component = componentMap[calculator?.component];

  const shareUrl = window.location.href;
  const shareText = calculator?.title || "Check this calculator";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" py-6">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-2">{calculator?.title}</h1>
      <p className="mb-4 text-gray-500">{calculator?.description}</p>

      {Component ? <Component /> : <p>Calculator not found.</p>}
      {/* Share Buttons */}
      <div className="flex items-center gap-4 py-8 flex-wrap">
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full transition"
          title="Share on Facebook"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.9.2 1.9.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3H14v7A10 10 0 0 0 22 12Z" />
          </svg>
        </a>

        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-500 text-white p-1 rounded-full transition"
          title="Share on Twitter"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.37-4.087 11.56-11.56 11.56-2.29 0-4.42-.668-6.215-1.807.32.037.626.05.959.05 1.885 0 3.624-.638 5-1.716a4.077 4.077 0 0 1-3.806-2.823c.247.037.494.063.754.063.355 0 .71-.05 1.042-.137a4.072 4.072 0 0 1-3.262-3.993v-.05a4.106 4.106 0 0 0 1.85.523 4.07 4.07 0 0 1-1.26-5.43 11.558 11.558 0 0 0 8.395 4.26 4.596 4.596 0 0 1-.1-.93 4.07 4.07 0 0 1 7.046-2.78 8.095 8.095 0 0 0 2.583-.986 4.04 4.04 0 0 1-1.78 2.24 8.17 8.17 0 0 0 2.34-.63 8.72 8.72 0 0 1-2.043 2.113z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            shareUrl
          )}&title=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white p-1 rounded-full transition"
          title="Share on LinkedIn"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.64v1.64h.05a4 4 0 0 1 3.6-2c3.86 0 4.57 2.54 4.57 5.84v6.52h-4v-5.78c0-1.38 0-3.14-1.91-3.14-1.92 0-2.21 1.5-2.21 3.04v5.88h-4v-12Z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${shareText} ${shareUrl}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-1 rounded-full transition"
          title="Share on WhatsApp"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16.003 3.2C9.303 3.2 3.997 8.508 3.997 15.206c0 2.675.998 5.13 2.648 7.033L5.2 28.8l6.747-1.397c1.803.958 3.87 1.497 6.056 1.497 6.7 0 12.007-5.308 12.007-12.007 0-6.697-5.308-12.005-12.007-12.005zm0 21.81c-1.825 0-3.605-.487-5.158-1.405l-.367-.214-4.005.83.83-3.89-.238-.368c-1.206-1.67-1.84-3.643-1.84-5.676 0-5.43 4.418-9.848 9.848-9.848s9.847 4.417 9.847 9.848c.002 5.43-4.416 9.847-9.847 9.847zm5.01-7.16c-.274-.137-1.607-.79-1.857-.88-.248-.093-.428-.137-.606.137-.18.273-.696.878-.854 1.057-.157.18-.312.203-.586.07-.273-.138-1.153-.424-2.196-1.353-.81-.72-1.358-1.61-1.517-1.884-.158-.274-.017-.422.12-.56.124-.124.275-.32.412-.48.14-.16.186-.273.276-.457.092-.184.045-.344-.023-.48-.067-.137-.606-1.465-.832-2.01-.22-.524-.445-.454-.606-.463-.158-.008-.34-.01-.522-.01s-.48.07-.732.344c-.253.273-.96.937-.96 2.285s.983 2.646 1.12 2.828c.138.183 1.93 2.947 4.678 4.13.654.28 1.164.446 1.56.57.655.208 1.25.18 1.722.11.525-.078 1.607-.655 1.833-1.288.226-.633.226-1.175.158-1.29-.065-.113-.25-.18-.524-.317z" />
          </svg>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`${
            copied ? "bg-green-600" : "bg-gray-500 hover:bg-gray-600"
          } text-white p-1 rounded-full transition`}
          title="Copy Link"
        >
          {copied ? (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.285 6.709l-11.93 11.93-5.657-5.657 1.414-1.415 4.243 4.243 10.516-10.516z" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CalculatorPage;
