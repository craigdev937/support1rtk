import "./Home.css";
import { Link } from "react-router";
import { UAS } from "../../global/Hooks";

export const Home = () => {
    const { isAuth, user } = UAS((state) => state.auth);

    return (
        <main className="home">
            <section className="home__hero">
                <div className="home__hero-lable">SYSTEM STATUS · OPERATIONAL</div>
                <h1 className="home__headline">
                    {isAuth ? (
                        <>Welcome back, <span className="home__headline-accent">{user?.first}</span></>
                    ) : (
                        <>Track every issue. <br />Close every ticket.</>
                    )}
                </h1>
                <p className="home__sub">
                    A streamlined support desk for your team. 
                    Submit, track, and resolve
                    tickets from one place.
                </p>

                {!isAuth && (
                    <div className="home__auth-cta">
                        <Link 
                            to={"/login"} 
                            className="btn btn--primary"
                            >Login
                        </Link>
                        <Link 
                            to={"/register"} 
                            className="btn btn--ghost"
                            >Register
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
};


