from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Listen for console events and print them
    def log_console_message(msg):
        print(f"CONSOLE ({msg.type}): {msg.text} @ {msg.location}")

    page.on("console", log_console_message)
    page.on("pageerror", lambda exc: print(f"PAGE ERROR: {exc}"))


    page.goto(f"file:///app/Adidas%20Home%20Page/index.html")
    page.screenshot(path="jules-scratch/verification/verification-1.png")
    try:
        page.click('.slick-next', timeout=5000) # Increased timeout
        page.wait_for_timeout(500)
        page.screenshot(path="jules-scratch/verification/verification-2.png")
    except Exception as e:
        print(f"Error clicking .slick-next: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
