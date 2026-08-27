# Происхождение скилла

Дословная копия скилла `impeccable` (design fluency для frontend).

- Репозиторий: https://github.com/pbakaus/impeccable
- Путь в репозитории: `.claude/skills/impeccable/` (идентичен `plugin/skills/impeccable/`)
- Версия: `4.1.2`
- Коммит на момент копирования: `63b04e2530f5c7b41ea83c133daab24f34912456` (2026-08-26)
- Автор: Paul Bakaus <paul@paulbakaus.com>
- Лицензия: Apache 2.0 (см. LICENSE в репозитории выше)

Скилл подключён локально (project scope) — доступен только в этом проекте,
глобальный конфиг Claude Code не затрагивался. Вместе со скиллом скопированы
4 сабагента в `.claude/agents/impeccable-*.md`.

Design-хук (`hooks` в `settings.json`, запуск детектора анти-паттернов после
Edit/Write и на Stop) намеренно **не** подключён. При необходимости — см.
`.claude/skills/impeccable/reference/hooks.md` и пример конфига в
`plugin/hooks/hooks.json` / `.claude/settings.json` исходного репозитория.

Обновление: заменить содержимое `.claude/skills/impeccable/` и
`.claude/agents/impeccable-*.md` свежей версией из репозитория выше.
Официальный способ установки (вне этого проекта) — `npx impeccable install`
или плагин-маркетплейс `/plugin marketplace add pbakaus/impeccable`.
