""" Leader ------------------------------------
let mapleader=" "

""" Settings ----------------------------------

" Enable incremental search
set incsearch

" Show N lines above/below the cursor at all times
set so=5

" Show the mode we're in
set showmode

" Set the width of tabs to be 4 spaces
set tabstop=4

" Idents have a width of 4
set shiftwidth=4

" Sets the number of columns for a TAB
set softtabstop=4

" Expand TABs to spaces
set expandtab

" Add line numbers
set number

" Enable relative line numbering for easier navigation
set relativenumber

" Colours / syntax highlighting
syntax enable
colorscheme habamax
set background=dark

" Smart indentation
set si

" Tell Vim how many colours the terminal supports
set t_Co=256

" Enhance completion features
" - menuone - display the completion menu even if there's only one match
" - preview - show preview window for selected option
set completeopt+=menuone,preview

" Enhanced command-line completion
set wildmenu
set wildmode=longest,full


""" Mappings -----------------------------------
