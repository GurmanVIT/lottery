import "../src/assets/style/Style.scss";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Login from "./component/forms/Login/Index";
import Register from "./component/forms/Register/Index";
import Index from "./component/Home/Index";
import Lottery from "./component/Lottery/Lottery";
import OTP from "./component/forms/OTP/Index";
import Forgot from "./component/forms/Forgot/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import ModalBottom from "./component/Lottery/BigSmall/OffCanvas/ModalBottom";
import Profile from "./component/profile/Index";
import WinPop from "./component/Lottery/WinPop";
import LossPop from "./component/Lottery/LossPop";
// import Withdraw from "./component/Lottery/Withdraw/Withdraw";
import Deposit from "./component/Lottery/Deposit/Deposit";
import Setting from "./component/profile/Setting/Seting";
import ChangePassword from "./component/profile/Setting/ChangePassword/ChangePassword";
import Notification from "./component/profile/Notification/Notification";
import CycleDetail from "./component/Lottery/Deposit/CycleDetail/CycleDetail";
import Feedback from "./component/profile/Feedback/Feedback";
import About from "./component/profile/About/About";
import Service from "./component/profile/Service/Service";
import WithdrawBalance from "./component/Lottery/WithdrawBalance/WithdrawBalance";
import UpdateWalletAddress from "./component/Lottery/UpdateWalletAddress/UpdateWalletAddress";
import Transfer from "./component/Lottery/TransferUSDT/Transfer";
import DepositHistory from "./component/Lottery/Deposit/DepositHistory/DepositHistory";
import Transaction from "./component/Lottery/LinkMember/LinkMember";
import MyTicket from "./component/Lottery/MyTiclket/MyTicket";
import TicketSummery from "./component/Lottery/TicketSummery/TicketSummery";
import BetHistory from "./component/profile/BetHistory/BetHistory";
import TeamMember from "./component/profile/TeamMember/TeamMember";
import TeamTree from "./component/profile/TeamTree/TeamTree";
import PromotionData from "./component/Promotion/Index";
import Rules from "./component/Promotion/Rules/Rules";
import WalletPage from "./component/Wallet/WalletPage";
import MatchingTree from "./component/profile/MatchingTree/MatchingTree";
import BonusPage from "./component/Bonus/Index";
import InvitationBonus from "./component/Bonus/InvitationBonus";
import InvitationRules from "./component/Bonus/InvitationRules/InvitationRules";
import Youtubes from "./component/Bonus/Youtube/Youtubes";
import PlayEarnRules from "./component/Bonus/PlayEarnRules/PlayEarnRules";
import GamePlayBonus from "./component/Bonus/TeamGamePlayBonus/GamePlaYBonus";
import MatchingBonus from "./component/Bonus/MachingBonus/Matchingbonus";
import ActivityBonus from "./component/Bonus/ActivityBonus/ActivityBonus";
import Bottom_bar from "./component/Home/Bottom/Bottom_bar";
import MatchingRules from "./component/Bonus/MatchingRules/MatchingRules";
import DirectTree from "./component/Bonus/MyDirectTree/DirectTree";
import GameplayRules from "./component/Bonus/GameplayRules/GameplayRules";
import Bonanza from "./component/Bonus/Bonanza/Bonanza";


// export

function App() {

  // function PrivancyBottomBar() {
  //   return (
  //     <>
  //       <div className="">
  //         <Outlet />
  //         <Bottom_bar className="m-auto" />
  //       </div>
  //     </>
  //   );
  // }

  return (
    <Provider store={store}>
      <Router>
        <Routes>

          {/* <Route element={<PrivancyBottomBar />}> */}
          <Route path="/home_page" element={<Index />} />
          <Route path="/bonus" element={<BonusPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/promotion" element={<PromotionData />} />
          <Route path="/wallet" element={<WalletPage />} />
          {/* </Route> */}



          <Route path="*" element={<Login />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/modalbottom" element={<ModalBottom />} />
          <Route path="/winner" element={<WinPop />} />
          <Route path="/loss" element={<LossPop />} />
          {/* <Route path="/withdraw" element={<Withdraw />} /> */}
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/cycle_detail" element={<CycleDetail />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/withdraw_balance" element={<WithdrawBalance />} />
          <Route path="/update_wallet_address" element={<UpdateWalletAddress />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/deposit_history" element={<DepositHistory />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/my_ticket" element={<MyTicket />} />
          <Route path="/ticket_summery" element={<TicketSummery />} />
          <Route path="/bet_history" element={<BetHistory />} />
          <Route path="/team_member" element={<TeamMember />} />
          <Route path="/team_tree" element={<TeamTree />} />
          <Route path="/rule" element={<Rules />} />
          <Route path="/matching_tree" element={<MatchingTree />} />
          <Route path="/invitation_bonus" element={<InvitationBonus />} />
          <Route path="/invitation_rules" element={<InvitationRules />} />
          <Route path="/youtube" element={<Youtubes />} />
          <Route path="/play_earn_rule" element={<PlayEarnRules />} />
          <Route path="/team_gameplay_bonus" element={<GamePlayBonus />} />
          <Route path="/matching_bonus" element={<MatchingBonus />} />
          <Route path="/activity_bonus" element={<ActivityBonus />} />
          <Route path="/matching_rules" element={<MatchingRules />} />
          <Route path="/direct_tree" element={<DirectTree />} />
          <Route path="/gameplay_rules" element={<GameplayRules />} />
          <Route path="/bonanza" element={<Bonanza />} />
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
