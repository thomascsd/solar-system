## Context

當前系統擁有一個基本的太陽系動畫，行星以 CSS 動畫運轉。現有的資訊面板僅顯示單一語言（中文），且缺乏動畫控制功能。

## Goals / Non-Goals

**Goals:**

- 提供一個全域按鈕來切換動畫的暫停與播放狀態。
- 更新資訊面板以支援中英對照的內容顯示。
- 更新數據結構以包含英文名稱與資訊。

**Non-Goals:**

- 不改變現有的行星物理模型或軌道參數。
- 不增加 3D 視角切換或其他複雜的互動功能。

## Decisions

- **動畫控制實作**:
  - 決定使用 CSS `animation-play-state` 屬性。
  - 在 `#solar-system` 或 `.orbit` 上切換一個 `.paused` 類別。
  - 理由：這是效能最高且實作最簡單的方式，不需要修改 JS 動畫循環。
- **中英對照面板**:
  - 更新 `script.js` 中的 `planets` 陣列，增加 `nameEn` 與 `infoEn` 欄位。
  - 更新 `index.html` 的資訊面板結構，區分中文與英文顯示區域。
  - 理由：直接在數據源中維護對照內容，方便後續擴展其他語言。
- **UI 位置**:
  - 暫停按鈕將放置在左上角，以避免與右上角的資訊面板衝突。

## Risks / Trade-offs

- **[Risk] CSS 動畫暫停時的渲染差異** → **Mitigation**: `animation-play-state: paused` 在主流瀏覽器中表現一致，且能保留當前動畫進度。
- **[Trade-off] 空間佔用** → **Mitigation**: 增加中英對照會使資訊面板高度增加，需確保在小螢幕設備上仍能正常顯示（透過 CSS `max-height` 與 `overflow-y: auto`）。
