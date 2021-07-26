import '../../../../scss/InitSection.css'
import {fire} from '../../../../db/firebase';
import 'firebase/auth';
import 'firebase/firestore'
import {Link} from 'react-router-dom'
const img = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDYwIDU1IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IjAyOS0tLVBldC1IZWFsdGgiIGZpbGw9InJnYigwLDAsMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNDQuNSAxYy0yLjExMTcwOTUuMDAyMzUwNTctNC4yMDk4Mjk2LjMzNzgwNjgtNi4yMTcuOTk0LTEuMDcwMTIwMy0xLjIyMTY5MDM5LTIuNTk5Njc3NS0xLjk0MzkxMDg1LTQuMjIzLTEuOTk0LTMuMDExMzI4NS4xNjMzNjk1OS01Ljk5MDI2MDkuNzAzOTI0NzItOC44NjcgMS42MDktLjY3MTMyNDQuMTk2Mzc2MzYtMS4yOTM1ODA5LjUzMjM4MTI2LTEuODI2Ljk4Ni0yLjQ4ODQxNzgtMS4wNTUyMDc1LTUuMTY0MDk4MS0xLjU5NzY5MDAyLTcuODY3LTEuNTk1LTguNjkxIDAtMTUuNSA4LjQtMTUuNSAxOS4xMiAwIDExLjI1NiA3LjI3OCAyNi42OTEgMjcuNTg4IDM0LjEwNi4wMTkuMDA5LjAzOS4wMTUuMDU4LjAyMi42NjY2NjY3LjI0NCAxLjM0ODY2NjcuNDc3MzMzMyAyLjA0Ni43LjA5OTM1MjkuMDMzMTg0NC4yMDMyNTk0LjA1MDcyNzEuMzA4LjA1Mi4xMDQ5NDg3LjAwMDE4MTkuMjA5MjU2Mi0uMDE2MzU4OC4zMDktLjA0OSAxLjg4ODEzMDUtLjYxMjIyOTggMy43NDMyODI0LTEuMzIxODQ3MSA1LjU1OC0yLjEyNi4wMjUtLjAwOS4wNTEtLjAwNS4wNzYtLjAxNnMuMDQxLS4wMzIuMDY1LS4wNDRjMTcuNTgtNy44NjUgMjMuOTkyLTIyLjA5NyAyMy45OTItMzIuNjQ1IDAtMTAuNzItNi44MDktMTkuMTItMTUuNS0xOS4xMnptMTMuNSAxOS4xMmMtLjExNzYzMDMgNi4wNjg5NjI1LTIuMDQ3Mjc5MSAxMS45NjQxMjQ4LTUuNTQxIDE2LjkyOC0yLjU5MS01Ljc1Mi01LjktMTAuOTY5LTcuNjkyLTEyLjc1NS0xLjMwNDQ1MzctMS40NDk4NTQ0LTIuOTY0ODk0NS0yLjUzMzk0OTUtNC44MTctMy4xNDVsLS40MTItMi44ODljMS43MDg5MzY1LTEuMTg1ODYzNCAyLjY2NzE1NTgtMy4xODM5OTAyIDIuNTIyLTUuMjU5LjAzMDU3ODgtMy4yNzM0Mzc4Ny0uODI3NTcyNS02LjQ5MzgzODEtMi40ODMtOS4zMTggMS42MDE5NDg0LS40NTIwNzI5NyAzLjI1ODQ4NTUtLjY4MTU1ODcxIDQuOTIzLS42ODIgNy41NyAwIDEzLjUgNy41MiAxMy41IDE3LjEyem0tNTYgMGMwLTkuNiA1LjkzLTE3LjEyIDEzLjUtMTcuMTIgMi4yMzY2MTkuMDAzOTIzMTYgNC40NTMxMDg1LjQyMjY3MjUyIDYuNTM3IDEuMjM1bC0xLjk1MSAyLjkyM2MtLjQxNDMyMjkuNjIxMzE3MjEtMS4wNDQyMjQ2IDEuMDY3MDIyNS0xLjc2OCAxLjI1MWwtNS44MDcgMS40NDJjLS44NTg4OTM2LjIxNzMyNDMtMS40NzA0OTg0Ljk3NjUyOTctMS41IDEuODYyLS4wNjQgMS43LjE2MyA3LjM3NSA1LjczMiA5LjIzNS4xMDIxNzQuMDM0MzAzLjIwOTIyMTUuMDUxODYyOC4zMTcuMDUyIDIuOTQ5Mzg5LjAzMzkyNjMgNS44NzUxMDc1LjUzMTMzMjIgOC42NyAxLjQ3NGwtLjI0NC41MjZjLTEuNjA3ODM0NiAzLjA4OTgyNzYtMi40NTk4MjI4IDYuNTE2OTcyNC0yLjQ4NiAxMCAuMDY2NzIzOSAzLjgyNzIwMDEgMS40ODM0MjA0IDcuNTA3Nzc3NSA0IDEwLjM5MnY4LjQ2NWMtMTguMzY4LTcuMjI4LTI1LTIxLjM3My0yNS0zMS43Mzd6bTExLTguMzI5IDItLjV2MS43MDloLTEuOTY4Yy0uMDM0MDE3OS0uNDAyMDQzMi0uMDQ0NzAyNS0uODA1NzIwMi0uMDMyLTEuMjA5em0yMy4xNTYgMzguN2MtLjEwNDg1MTktLjQ5MDA0MTgtLjE1NzE0NzYtLjk4OTg2NzctLjE1Ni0xLjQ5MS0uMDUyMTMxNS0yLjQ4MzUzMzUgMS4wNjc3OTA0LTQuODQ2NzQyOCAzLjAyMy02LjM3OSAxLjY1Njc5OTEtMS4xNTQxOTMxIDMuNzgwMDMxMy0xLjQwNjIzNTUgNS42NjEtLjY3Mi4zMzk0MDIzLjExMjg5NTkuNzEzMjUyMi4wMzYxNDcxLjk4MDcyNDEtLjIwMTMzNi4yNjc0NzE5LS4yMzc0ODMuMzg3OTMwNC0uNTk5NjIxLjMxNi0uOTVzLS4zMjUzMjE4LS42MzU3NjgxLS42NjQ3MjQxLS43NDg2NjRjLTIuNDkyMDc0MS0uOTMyMDA5OC01LjI4MzM1MTEtLjU3NjI3MzUtNy40NjIuOTUxLTIuNDczMjQ1MiAxLjkxMDU5NjUtMy45MDEzODkgNC44NzUwODgtMy44NTQgOC0uMDAzODg5OS43ODI5MjEzLjA5NzAwNTUgMS41NjI4NDI1LjMgMi4zMTktMS4zNjguNTgyLTIuOCAxLjEzLTQuMzA1IDEuNjI5LS4zNC0uMTEyLS42NjYtLjIzMi0xLS4zNDl2LTkuNTk5Yy4wMDAyMDkzLS4yNjQ1NjE4LS4xMDQ0Mjg3LS41MTg0MjU3LS4yOTEtLjcwNi0yLjMwNDQyMjctMi41NTY1ODIxLTMuNjE4MjQ0OS01Ljg1MzE5NzUtMy43MDQtOS4yOTQuMDI1MjE0NS0zLjE5MTQ2OTEuODEzODQ0OS02LjMzMDU2MTMgMi4zLTkuMTU1bC4yNDQtLjUyOWMuMjI5NDg5NC0uNDg5MTI0Mi4yNDc1NzIxLTEuMDUxMTM1MS4wNS0xLjU1NC0uMjA0NTU5Ni0uNTExOTk0MS0uNjEwNjQyMS0uOTE3MzUzNC0xLjEyMy0xLjEyMS0yLjk3MDQ1Mi0xLjA0MzgyMTUtNi4wOTA3Nzc3LTEuNTk4MDQzMi05LjIzOS0xLjY0MS0xLjg0NjY3MjEtLjYzMjY0OTUtMy4yNjk0MjI1LTIuMTI1MTc1Ni0zLjgxMy00aDEuNTgxYzEuMTA0NTY5NSAwIDItLjg5NTQzMDUgMi0ydi0yLjJsMS44MDktLjQ0OWMxLjIwNDk4MTgtLjMwNjE4NTYgMi4yNTM1OTQ2LTEuMDQ4Mzc0MDIgMi45NDMtMi4wODNsMi4zMzctMy41Yy4wNzg1MDYzLS4xMTY1NTU5OS4xNjUwNDk4LS4yMjc0OTIwNi4yNTktLjMzMi4zNzA1NzU2LS40MjgxOTU2MS44NTY2MDExLS43NDA2NDA1NiAxLjQtLjkgMi42OTg1OTExLS44NDUzMDUwMyA1LjQ4OTUzMTctMS4zNjEwNTE1IDguMzEyLTEuNTM2IDEuMjU2NzM5My4xMDM1ODQ3MiAyLjQwNDY2OTkuNzUzNTkxMyAzLjE0IDEuNzc4IDEuOTI0ODI0OSAyLjY4NDE4MDAzIDIuOTI4MjUzNCA1LjkxOTcxMDY2IDIuODYgOS4yMjIgMCAxLjkxNC0uNjgyIDMuMi0yLjAyOSAzLjgxMi0xLjQyMjczMTYuNTQzMjIwNS0zLjAwMTIxODUuNTEwMjE1OC00LjQtLjA5Mi0uMzgxMTE0LS4xNTEzMDg5LS42MzEyMzQtLjUxOTk0ODYtLjYzMS0uOTN2LTYuNzljMC0uNTUyMjg0NzUtLjQ0NzcxNTMtMS0xLTFzLTEgLjQ0NzcxNTI1LTEgMXY2Ljc5Yy4wMDQ1NDM5IDEuMjI4NTM4Mi43NTMwOTgzIDIuMzMxNzk1OSAxLjg5MyAyLjc5IDEuNDk5NTgzMy42MTEyODcyIDMuMTQ1NTcwNC43NjkxNDA2IDQuNzM0LjQ1NGwuMzQ0IDIuNGMuMTEyNjQ4OC43ODg4NDM3LjY4NjU0MTEgMS40MzM2MzU1IDEuNDU3IDEuNjM3IDEuNTEyMDk2NC41MjgzOTA0IDIuODYzNjk0IDEuNDM1MTkzMiAzLjkyNiAyLjYzNCAxLjU1MyAxLjU0NCA1LjA1IDYuOTM0IDcuNzM3IDEzLjItNC4wMDYzODIzIDQuOTcyNzQ5My05LjEyMDY5MDQgOC45MzkxMjkxLTE0LjkzNCAxMS41ODJ6Ii8+PC9nPjwvZz48L3N2Zz4=" 
const img2 = "https://image.flaticon.com/icons/png/512/833/833314.png"
export const Header = () => {
    const db = fire.firestore();

    const logOut = async() =>{
        const auth = fire.auth();
        await auth
            .signOut().then(()=>{
                console.log('signOut')
            });
        
    }

       

    return (
        <div>
            <div className="containerHeader">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid" style={{padding:'0px 0px'}}>
                        <a className="navbar-brand" style={{padding:'0px 12px'}} href="#"><img src={img} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{margin:'0px 12px'}}data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText" style={{backgroundColor:'rgb(248, 249, 250)'}}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item" >
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sell" >
                                        Start selling
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shopping_cart">
                                        <img src={img2} alt="" style={{width:'20px'}}/> 
                                    </Link>
                                </li>
                            </ul>
                            <button className="btn btn-outline-success" style={{margin:'20px 12px'}}type="submit" onClick={logOut}>Logout</button>

                        </div>
                    </div>
                </nav>

                <div className="container-title">
                    <p>FEEDS THE GOOD</p>
                </div>

                <div className="container-title-principal">
                    <p>From Mini to</p>
                    <p>Daily to Special</p>
                    <p>to Nature</p>
                </div>
                <div className="container-info-botton">
                    <div className="container-img"></div>
                    <div className="container-texto"></div>
                </div>

            </div>
        </div>
    )
}
