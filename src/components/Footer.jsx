import React from 'react'
import "../styles/footer.css"
function Footer() {
  return (
    <>
    <div className="page-footer">
        <footer className="footer">
            <div className="container py-3">
                <div className="row">
                    <div className="col-6 w-50">
                        <span className="text-small text-muted">
                        ©Automatic Token Maker
                        </span>
                    </div>
                    <div className="col-6 w-50 text-end">
                        <button type='button' className="btn footer-link py-0">
                            Terms of use
                        </button>
                        <a href="/#faq" className="btn footer-link nodeco py-0">Help</a>
                        <a href="https://eattheblocks.com/" target="_blank" rel='noopnner noreferrer' className="btn footer-link nodeco py-0">Eat The Blocks</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer