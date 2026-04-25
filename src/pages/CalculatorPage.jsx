import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { calculators } from "../data/calculators";
import GlobalBreadcrumb from "../components/GlobalBreadcrumb";
import MortgageSeoContent from "../components/seo/MortgageSeoContent";
import AmortizationSeoContent from "../components/seo/AmortizationSeoContent";
import AnnuitySeoContent from "../components/seo/AnnuitySeoContent";
import AnnuityPayoutSeoContent from "../components/seo/AnnuityPayoutSeoContent";
import APRSeoContent from "../components/seo/APRSeoContent";
import AutoLeaseSeoContent from "../components/seo/AutoLeaseSeoContent";
import AverageReturnSeoContent from "../components/seo/AverageReturnSeoContent";
import AutoLoanSeoContent from "../components/seo/AutoLoanSeoContent";

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
import LoanPayoffCalculator from "../calculators/finance/LoanPayoffCalculator";
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
  LoanPayoffCalculator,
  // 👉 Add all other calculator mappings here
};
const CalculatorPage = () => {
  const { category, id } = useParams();
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

  const categoryName = useMemo(() => {
    const c = (category || "").toLowerCase();
    return c ? c.charAt(0).toUpperCase() + c.slice(1) : "Calculators";
  }, [category]);

  const categoryIcon = useMemo(() => {
    const c = (category || "").toLowerCase();
    if (c === "finance") return "account_balance_wallet";
    if (c === "health") return "monitor_heart";
    if (c === "math") return "functions";
    if (c === "geometry") return "architecture";
    if (c === "statistics") return "show_chart";
    return "calculate";
  }, [category]);

  const popularInCategory = useMemo(() => {
    if (!calculator) return [];
    const list = calculators.filter(
      (c) => c.category === calculator.category && c.id !== calculator.id
    );
    // Simple deterministic "popular" pick (first 4)
    return list.slice(0, 4);
  }, [calculator]);

  const relatedTools = useMemo(() => {
    if (!calculator) return [];
    const list = calculators.filter(
      (c) => c.category === calculator.category && c.id !== calculator.id
    );
    return list.slice(0, 3);
  }, [calculator]);

  const exploreMore = useMemo(() => {
    if (!calculator) return [];
    const current = calculator.category.toLowerCase();

    const CATEGORY_CARDS = [
      {
        key: "finance",
        title: "Finance",
        subtitle: "Loans, interest, tax & investing",
        icon: "account_balance_wallet",
        colorClass: "bg-blue-100 text-primary",
      },
      {
        key: "health",
        title: "Health",
        subtitle: "BMI, calories, fitness metrics",
        icon: "monitor_heart",
        colorClass: "bg-green-100 text-emerald-700",
      },
      {
        key: "math",
        title: "Math",
        subtitle: "Percentages, algebra, numbers",
        icon: "functions",
        colorClass: "bg-indigo-100 text-indigo-700",
      },
      {
        key: "geometry",
        title: "Geometry",
        subtitle: "Shapes, area, volume tools",
        icon: "architecture",
        colorClass: "bg-orange-100 text-orange-700",
      },
      {
        key: "statistics",
        title: "Statistics",
        subtitle: "Stats, z-score, p-value tools",
        icon: "show_chart",
        colorClass: "bg-slate-100 text-slate-700",
      },
      {
        key: "other",
        title: "Other",
        subtitle: "Everyday utilities & converters",
        icon: "straighten",
        colorClass: "bg-purple-100 text-purple-700",
      },
    ];

    return CATEGORY_CARDS.filter((c) => c.key !== current);
  }, [calculator]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      } catch {
        // fallback below
      }
    }
    handleCopyLink();
  };

  return (
    <main className="flex-grow max-w-[1280px] mx-auto w-full px-6 py-6">
      {/* Breadcrumbs & Title */}
      <div className="mb-8">
        <GlobalBreadcrumb />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
              {calculator?.title}
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg">
              {calculator?.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">share</span>
              {copied ? "Copied" : "Share"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
            {Component ? <Component /> : <p>Calculator not found.</p>}
          </div>
 
          {/* SEO content below the calculator card (mortgage only) */}
          {calculator?.id === "mortgage-calculator" && <MortgageSeoContent />}
          {calculator?.id === "amortization-calculator" && (
            <AmortizationSeoContent />
          )}
          {calculator?.id === "annuity-calculator" && <AnnuitySeoContent />}
          {calculator?.id === "annuity-payout-calculator" && (
            <AnnuityPayoutSeoContent />
          )}
          {calculator?.id === "apr-calculator" && <APRSeoContent />}
          {calculator?.id === "auto-lease-calculator" && <AutoLeaseSeoContent />}
          {calculator?.id === "average-return-calculator" && (
            <AverageReturnSeoContent />
          )}
          {calculator?.id === "auto-loan-calculator" && <AutoLoanSeoContent />}

          {/* Related Tools (global, same for all calculators) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-on-surface">
              Related {categoryName} Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTools.map((c) => (
                <Link
                  key={c.id}
                  className="p-5 bg-white border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all group"
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                >
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    {categoryIcon}
                  </span>
                  <h4 className="font-bold text-on-surface group-hover:text-primary mb-1">
                    {c.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    {c.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container rounded-xl p-6">
            <h3 className="text-lg text-on-surface mb-4 flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-primary">star</span>
              Popular in {categoryName}
            </h3>
            <div className="space-y-3">
              {popularInCategory.map((c) => (
                <Link
                  key={c.id}
                  className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant hover:border-primary transition-all group"
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary">
                    trending_up
                  </span>
                  <span className="text-sm font-medium text-on-surface group-hover:text-primary">
                    {c.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant">
            <h3 className="font-h2 text-h2 text-on-surface mb-4">
              Explore More
            </h3>
            <div className="space-y-4">
              {exploreMore.map((c) => (
                <Link
                  key={c.key}
                  className="group flex items-center p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-primary transition-all"
                  to={`/${c.key}`}
                >
                  <div
                    className={[
                      "w-10 h-10 rounded flex items-center justify-center shrink-0",
                      c.colorClass,
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-h3 text-h3 text-sm group-hover:text-primary transition-colors">
                      {c.title}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {c.subtitle}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <h3 className="text-lg font-semibold text-on-surface">
                How it works
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              This calculator uses standard formulas to produce results from the
              inputs you provide. Exact assumptions may vary per tool.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CalculatorPage;
