const Footer = () => {
    return (
        <footer className="bg-slate-900 text-neutral-content py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <span className="text-lg font-bold">Health and Wellness</span>
                        <div className="mt-3">
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Blog</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-lg font-bold">Events</span>
                        <div className="mt-3">
                            <p>Upcoming Events</p>
                            <p>Past Events</p>
                            <p>Host an Event</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-lg font-bold">Resources</span>
                        <div className="mt-3">
                            <p>Newsletter</p>
                            <p>Webinars</p>
                            <p>Research</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-lg font-bold">Connect</span>
                        <div className="mt-3">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-slate-800 pt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Health and Wellness Events. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
