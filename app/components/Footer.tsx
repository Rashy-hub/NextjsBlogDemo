function Footer() {
    const thisyear = new Date().getFullYear()
    return (
        <footer className="bg-neutral-900 text-amber-200 text-center">
            Dave gray blog Copyright&copy; {thisyear}
        </footer>
    )
}

export default Footer
