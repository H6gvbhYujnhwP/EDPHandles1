# MIRA Catalogue Replacement Verification Note

The MIRA Wardrobe Internal Fittings catalogue replacement was verified locally after the outdated PDF was replaced with the newly supplied 2026 catalogue.

| Check | Verified result |
|---|---|
| Public PDF asset hash | The uploaded source PDF and `client/public/catalogues/mira-wardrobe-internal-fittings-2026.pdf` have the same SHA-256 hash: `44ba8e77920c7c722ca856604edca1a7c71699c7429a13227750f6a60bf0235c`. |
| Served download path | `http://localhost:3001/catalogues/mira-wardrobe-internal-fittings-2026.pdf` returns `HTTP/1.1 200 OK` with `Content-Type: application/pdf`. |
| Page copy | The Internal Fittings page now shows the updated download label **Download MIRA Wardrobe Catalogue**. |

This confirms that the outdated MIRA page download has been replaced with the newly provided PDF and that the local site is serving the new catalogue successfully.
