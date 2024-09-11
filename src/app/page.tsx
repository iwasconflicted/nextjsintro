import { redirect } from "next/navigation";


export default function Home() {
  // No parenthesis around folder name
  // redirect('./pages/WelcomePage')

  // With parenthesis around folder name
 redirect('./WelcomePage');
}
