
spx_ui_assets_dir = $(INSTALL_ROOT)$(prefix)/share/misc/php-spx/assets/web-ui
CFLAGS += -DSPX_HTTP_UI_ASSETS_DIR=\"$(spx_ui_assets_dir)\"

SPX_UI_SRC ?= $(if $(wildcard assets/web-ui),assets/web-ui,$(if $(wildcard ext/spx/assets/web-ui),ext/spx/assets/web-ui,))

install-spx-ui-assets:
	@if [ -z "$(SPX_UI_SRC)" ]; then \
		echo "Error: SPX UI assets directory not found."; \
		exit 1; \
	fi
	@echo "Installing SPX web UI from $(SPX_UI_SRC) to: $(spx_ui_assets_dir)"
	@mkdir -p $(spx_ui_assets_dir)
	@cp -r $(SPX_UI_SRC)/* $(spx_ui_assets_dir)

install: $(all_targets) $(install_targets) install-spx-ui-assets
