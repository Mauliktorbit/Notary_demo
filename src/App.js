import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Demo from "./component/Demo";
import Registration from "./component/Registration";
import IdentityProofs from "./component/IdentityProofs";
import CreatePW from "./component/CreatePW";
import CreatePWEmp from "./component/CreatePWEmp";
import Personalreg from "./component/Personalreg";
import Contactdetail from "./component/Contactdetail";
import Uploaddetail from "./component/Uploaddetail";
import PendingNotary from "./component/PendingNotary";
import ApprovedNotary from "./component/ApprovedNotary";
import BusinessUserNotaryList from "./component/BusinessUserNotaryList";
import IndividualUserNotaryList from "./component/IndividualUserNotaryList";
import IndividualUserSelectLoyer from "./component/IndividualUserSelectLoyer";
import BusinessUserSelectLoyer from "./component/BusinessUserSelectLoyer";
import Uploadkyc from "./component/UploadKyc";
import Logindetail from "./component/Logindetail";
import Loginformperson from "./component/Loginformperson";
import Identifyprf from "./component/Identifyprf";
import CompanyForm from "./component/Companydetail";
import CompanyDocumentsForm from "./component/CompanyDocumentsForm";
import DirectorForm from "./component/DirectorForm";
import DirectorPerdet from "./component/DirectorPerdet";
import DirectorIdentity from "./component/DirectorIdentify";
import DirectorContact from "./component/DirectorContact";
import CompanyContact from "./component/CompanyContact";
import CompanyLogin from "./component/CompanyLogin";
import DirectorLogin from "./component/DirectorLogin";
import IndividualUserSignUp from "./component/IndividualUserSignUp";
import IndividualUserDocument from "./component/IndividualUserDocument";
import NotaryLogin from "./component/NotaryLogin";
import NotaryType from "./component/NotaryType";
import NotarySignup from "./component/NotarySignup";
import Home from "./component/Home";
import Individual from "./component/Individual";
import NotaryWriter from "./component/NotaryWriter";
import NewNotary from "./component/NewNotary";
import IndividualUserAddress from "./component/IndividualUserAddress";
import NotaryVerification from "./component/NotaryVerification";
import PersonSignIn from "./component/PersonSignIn";
import SelectNotary from "./component/SelectNotary";
import SecondParty from "./component/SecondParty";
import PreviewNotary from "./component/PreviewNotary";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/buissness-login" element={<Login />} />
        <Route path="/individual-login" element={<Individual />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/create-password" element={<CreatePW />} />
        <Route path="/create-password-employee" element={<CreatePWEmp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/identityproofs" element={<IdentityProofs />} />
        <Route path="/personalreg" element={<Personalreg />} />
        <Route path="/contactdetail" element={<Contactdetail />} />
        <Route path="/uploaddetail" element={<Uploaddetail />} />
        <Route
          path="/individualuserselectloyer"
          element={<IndividualUserSelectLoyer />}
        />

        <Route path="/uploadkyc" element={<Uploadkyc />} />
        <Route path="/logindetail" element={<Logindetail />} />
        <Route path="/loginformperson" element={<Loginformperson />} />
        <Route path="/identifyprf" element={<Identifyprf />} />
        <Route path="/notary-writer" element={<NotaryWriter />} />
        <Route path="/PreviewNotary" element={<PreviewNotary />} />
        <Route path="/notary-verification" element={<NotaryVerification />} />

        <Route path="/CompanyForm" element={<CompanyForm />} />
        <Route
          path="/CompanyDocumentsForm"
          element={<CompanyDocumentsForm />}
        />
        <Route path="/CompanyContact" element={<CompanyContact />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />

        <Route path="/DirectorForm" element={<DirectorForm />} />
        <Route path="/DirectorPerdet" element={<DirectorPerdet />} />
        <Route path="/DirectorIdentity" element={<DirectorIdentity />} />
        <Route path="/DirectorContact" element={<DirectorContact />} />
        <Route path="/DirectorLogin" element={<DirectorLogin />} />

        <Route path="/notarylogin" element={<NotaryLogin />} />
        <Route path="/notarytype" element={<NotaryType />} />
        <Route path="/pendingnotary" element={<PendingNotary />} />
        <Route path="/approvednotary" element={<ApprovedNotary />} />
        <Route path="/notarysignup" element={<NotarySignup />} />
        <Route path="/newnotary" element={<NewNotary />} />
        <Route path="/secondparty" element={<SecondParty />} />

        {/* Individual User Person SignUp */}
        <Route
          path="/IndividualUserSignUp"
          element={<IndividualUserSignUp />}
        />
        <Route
          path="/IndividualUserDocument"
          element={<IndividualUserDocument />}
        />
        <Route
          path="/IndividualUserAddress"
          element={<IndividualUserAddress />}
        />
        <Route path="/PersonSignIn" element={<PersonSignIn />} />
        <Route path="/SelectNotary" element={<SelectNotary />} />
        <Route
          path="/individualusernotarylist"
          element={<IndividualUserNotaryList />}
        />
        <Route
          path="/BusinessUserSelectLoyer"
          element={<BusinessUserSelectLoyer />}
        />
        <Route
          path="/businessusernotarylist"
          element={<BusinessUserNotaryList />}
        />
      </Routes>
    </>
  );
}

export default App;
