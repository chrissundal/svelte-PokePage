import { w as writable } from "./index3.js";
import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_URL = "https://lmyweupgfwhxtrteppgp.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteXdldXBnZndoeHRydGVwcGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyOTM1MjQsImV4cCI6MjA2Mjg2OTUyNH0.28XdMw204_R-Mlb4UntFRWf8caMw97iUD4vz_hIDX0Y";
const supabase = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
const session = writable(null);
supabase.auth.getSession().then(({ data: { session: dataSession } }) => {
  session.set(dataSession);
});
supabase.auth.onAuthStateChange((_event, newSession) => {
  session.set(newSession);
});
const authView = writable("sign_in");
const loginOpen = writable(false);
export {
  supabase as a,
  authView as b,
  loginOpen as l,
  session as s
};
