## Why

用戶希望能夠控制太陽系動畫的播放與暫停，以便更清楚地觀察行星。同時，當點擊行星時，需要顯示中英對照的行星資訊，以提升教育意義與使用者體驗。

## What Changes

- 增加一個全域暫停/播放按鈕，用於控制所有行星的軌道動畫。
- 更新行星點擊行為，在側邊欄顯示中英對照的行星詳細資訊。

## Capabilities

### New Capabilities

- `animation-control`: 提供暫停與恢復太陽系行星運行的功能。

### Modified Capabilities

- `planet-details`: 更新資訊面板以支援中英對照內容，並確保點擊行星時能觸發顯示。

## Impact

- `index.html`: 新增 UI 元件（暫停按鈕、資訊面板）。
- `style.css`: 增加新 UI 元件的樣式。
- `script.js`: 增加動畫控制邏輯、行星資訊數據庫及更新面板的邏輯。
